from django.urls import path
from .views import ElectricityBillCreateView
from .views import latest_bill
from .views import average_units 
from . import views

urlpatterns = [
    path('create/', ElectricityBillCreateView.as_view(), name='electricity-bill-create'),
    path('latest_bill/', latest_bill, name='latest_bill'),
    path('average_units/', average_units, name='average_units'),
    path('predict/', views.predict_next_month_units, name='predict_next_month_bill'),
]