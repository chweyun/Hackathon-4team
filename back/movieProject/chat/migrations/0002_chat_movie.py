# Generated by Django 4.0.6 on 2022-08-10 18:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('movieApp', '0002_remove_movie_genre_remove_movie_year_movie_image'),
        ('chat', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='chat',
            name='movie',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='movieApp.movie'),
        ),
    ]
