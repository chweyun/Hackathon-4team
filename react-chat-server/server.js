const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const cors = require("cors");
const { timeLog } = require("console");
const port = process.env.PORT || 5000;
const app = express();
const path = require("path");;

app.use(cors());

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
})

app.listen(port, () => {
  console.log("success!")
});

const server = http.createServer(app);
// socketio 생성후 서버 인스턴스 사용
const io = socketIO(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["*"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  // join : 채팅 참여 이벤트

  socket.on("join", ({ roomName: room, nickname: nickname }) => {
    socket.join(room);
    // io.to(room).emit("onConnect", `${nickname} 님이 입장하셨습니다.`);

    // send : 클라이언트가 메시지 보내는 이벤트
    // item: {name: String, msg: String, timeStamp: String}
    socket.on("onSend", (messageItem) => {
      io.to(room).emit("onReceive", messageItem);
    });

    socket.on("disconnect", () => {
      socket.leave(room);
      // io.to(room).emit("onDisconnect", `${nickname} 님이 퇴장하셨습니다.`);
    });
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
