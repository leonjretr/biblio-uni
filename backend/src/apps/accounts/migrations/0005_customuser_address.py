# Generated by Django 5.1.6 on 2025-03-06 19:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("accounts", "0004_customuser_phone"),
    ]

    operations = [
        migrations.AddField(
            model_name="customuser",
            name="address",
            field=models.CharField(
                blank=True, max_length=250, null=True, verbose_name="address"
            ),
        ),
    ]
