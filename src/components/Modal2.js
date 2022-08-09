import React, { useEffect } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const Modal2 = ({modalClose, memo, num}) => {
  console.log("Modal", memo);
  const time = new Date().toTimeString().split(" ")[0];

  useEffect(() => { // 모달 뒷배경 스크롤 방지
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <Modal__container>
      <MModal>
        <Modal__button onClick={modalClose}>X</Modal__button>
        <br /><br /><br />
        <P1>작품명</P1><br />
        <Div1>
          <Input1></Input1>
        </Div1>
        <P2>일시</P2><br />
        <Div2>
          <Input2 type="time"></Input2>
        </Div2>
        <P3>인원 제한</P3><br />
        <Div3>
          {/* <Input3 type="number" min="2" max="10"></Input3> */}
          <select style={{
            height: "94%", 
            width: "90%", 
            border: "none", 
            background: "transparent", 
            fontFamily: "SansMedium", 
            color: "#2c3333"
            }}>
            <option>2명</option>
            <option>3명</option>
            <option>4명</option>
            <option>5명</option>
            <option>6명</option>
            <option>7명</option>
            <option>8명</option>
            <option>9명</option>
            <option>10명</option>
          </select>
        </Div3>
        <Button onClick={modalClose}>MAKE A ROOM!</Button>
      </MModal>
    </Modal__container>
  )
}

export default Modal2;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  background-color: red;
  
`
const MemoList = styled.p`
  padding-top: 10px;
  color: black;
  font-size: 14px;
  font-family: "SCDream";
  margin-bottom: 10px;
`

const Modal__container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.6);
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
`

const MModal = styled.div`
    width: 100%;
    height: 100%;
    opacity: 0.7;
    margin-bottom: 70px;
    background-color: #2c3333;
    position: absolute;
`

const Modal__button = styled.button`
    position: relative;
    width: 24px;
    height: 24px;
    text-align: center;
    left:-40.6%;
    top: 8%;
    border-style: none;
    border-radius: 30px;
    background-color: #e7f6f2;
    line-height: 24px;
    color: #2c3333;
    font-size: 16px;
    font-family: "KOTRA";
`

const Div1 = styled.div`
    background-color: #e7f6f2;
    border-radius: 8px;
    height: 46px;
    width: 280px;
    display: inline-block;
    margin-top: 0px;
`

const Input1 = styled.input`
    height: 96%;
    width: 92%;
    border: none;
    border-radius: 8px;
    background: transparent;
    color: #2c3333;
    font-family: "SansMedium";
    padding-left: 12px;
`

const P1 = styled.p`
    margin-top: 40%;
    color: #e7f6f2;
    text-align: left;
    padding-left: 14%;
    font-family: "SansMedium";
    font-size: 18px;
`

const Div2 = styled(Div1)`
`

const P2 = styled(P1)`
    margin-top: 8%;
`

const Input2 = styled(Input1)`
`

const Div3 = styled(Div1)`
`

const P3 = styled(P1)`
    margin-top: 8%;
`

const Button = styled.button`
    width: 220px;
    height: 46px;
    border-radius: 12px;
    border-style: none;
    background-color: #A5C9CA;
    font-size: 18px;
    color: #395B64;
    font-family: "SansBold";
    margin-top: 16%;
`