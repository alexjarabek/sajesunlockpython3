# Generated by Django 2.1.1 on 2018-09-21 02:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('unlock', '0004_auto_20180920_2316'),
    ]

    operations = [
        migrations.AddField(
            model_name='info',
            name='time',
            field=models.IntegerField(null=True),
        ),
    ]
