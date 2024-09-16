from django.contrib import admin
from .models import ElectricityBill

@admin.register(ElectricityBill)
class ElectricityBillAdmin(admin.ModelAdmin):
    list_display = ('user', 'month', 'year', 'number', 'units_used')