# Generated by Django 2.1.1 on 2018-09-20 02:30

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('auteur', models.CharField(max_length=64)),
                ('titre', models.CharField(max_length=64)),
                ('contenu', models.TextField()),
                ('date', models.DateTimeField(default=django.utils.timezone.now, verbose_name='Date de parution')),
            ],
            options={
                'verbose_name': 'article',
                'ordering': ['date'],
            },
        ),
    ]
