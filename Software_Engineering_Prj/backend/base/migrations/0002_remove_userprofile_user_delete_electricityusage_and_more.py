# Generated by Django 5.0.6 on 2024-06-16 15:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userprofile',
            name='user',
        ),
        migrations.DeleteModel(
            name='ElectricityUsage',
        ),
        migrations.DeleteModel(
            name='UserProfile',
        ),
    ]
