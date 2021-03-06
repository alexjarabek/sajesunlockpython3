# Generated by Django 2.1.1 on 2018-09-21 02:54

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('unlock', '0005_info_time'),
    ]

    operations = [
        migrations.CreateModel(
            name='histories',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('imei', models.BigIntegerField()),
                ('email', models.EmailField(max_length=100)),
                ('number', models.IntegerField(null=True)),
                ('date', models.DateTimeField(default=django.utils.timezone.now)),
                ('idpay', models.IntegerField(null=True)),
                ('info', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='unlock.Info')),
            ],
        ),
    ]
