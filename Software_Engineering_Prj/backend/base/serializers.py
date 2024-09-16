from django.contrib.auth.models import User
from rest_framework import serializers

from .models import ElectricityBill


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create_user(**validated_data)
        return user



# class ElectricityBillSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = ElectricityBill
#         fields = ['user', 'month', 'year', 'number', 'units_used']


class ElectricityBillSerializer(serializers.ModelSerializer):
    class Meta:
        model = ElectricityBill
        fields = ['month', 'year', 'number', 'units_used']  # Removed 'user' from fields

