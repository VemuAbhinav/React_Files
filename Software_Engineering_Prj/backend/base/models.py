# models.py
from django.contrib.auth.models import User
from django.db import models

class ElectricityBill(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    month = models.CharField(max_length=20)
    year = models.IntegerField()
    number = models.CharField(max_length=20)
    units_used = models.IntegerField()

    def __str__(self):
        return f"{self.user.username} - {self.month} {self.year}"
