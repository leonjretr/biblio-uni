# Generated by Django 5.1.6 on 2025-02-27 10:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("library", "0009_genre_name_en_genre_name_uk_alter_book_image"),
    ]

    operations = [
        migrations.AddField(
            model_name="genre",
            name="image",
            field=models.FileField(
                blank=True, null=True, upload_to="uploads/", verbose_name="image"
            ),
        ),
    ]
