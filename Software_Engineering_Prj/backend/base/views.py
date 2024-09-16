from django.shortcuts import render, redirect
from django.contrib.auth.models import User, auth
from django.contrib import messages
from rest_framework import generics
from .serializers import UserSerializer
from .models import ElectricityBill
from .serializers import ElectricityBillSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny


# class CreateUserView(generics.CreateAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer
#     permission_classes = [AllowAny]
def register(request):
    if request.method=='POST':

        username=request.POST['username']
        password=request.POST['password']

        if password != username:
            if User.objects.filter(username=username).exists:
                messages.info(request,'username already exsist')
                return redirect('register')
            else:
                user=User.objects.create_user(username=username,password=password)
                user.save()
                return redirect('login.html')
    return render(request,Register.jsx)




# class ElectricityBillCreateView(generics.CreateAPIView):
#     queryset = ElectricityBill.objects.all()
#     serializer_class = ElectricityBillSerializer
#     permission_classes = [IsAuthenticated]

from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from .models import ElectricityBill
from .serializers import ElectricityBillSerializer

# class ElectricityBillCreateView(generics.CreateAPIView):
#     queryset = ElectricityBill.objects.all()
#     serializer_class = ElectricityBillSerializer
#     permission_classes = [IsAuthenticated]

#     def create(self, request, *args, **kwargs):
#         print("User: ", request.user)
#         return super().create(request, *args, **kwargs)

class ElectricityBillCreateView(generics.CreateAPIView):
    queryset = ElectricityBill.objects.all()
    serializer_class = ElectricityBillSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


# def latest_bill(request):
#     user = request.user
#     latest_bill = ElectricityBill.objects.filter(user=user).order_by('-id').first()
#     if latest_bill:
#         serializer = ElectricityBillSerializer(latest_bill)
#         return Response(serializer.data)
#     return Response({"detail": "No bills found for the user."}, status=404)

from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from .models import ElectricityBill
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes
from django.db.models import Avg

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def latest_bill(request):
    user = request.user
    print(f"User: {user}")
    latest_bill = ElectricityBill.objects.filter(user=user).order_by('-id').first()
    
    if latest_bill:
        response_data = {
            'units_used': latest_bill.units_used,
        }
        return JsonResponse(response_data)
    else:
        return JsonResponse({'error': 'No bills found for this user.'}, status=404)

# @api_view(['GET'])
# @permission_classes([IsAuthenticated])
def average_units(request):
    average_units = ElectricityBill.objects.aggregate(average=Avg('units_used'))['average']
    if average_units is not None:
        average_units = round(average_units, 2)
        return JsonResponse({'average_units': average_units})
    else:
        return JsonResponse({'error': 'No bills found'}, status=404)
    # return JsonResponse({'average_units': 42})

import numpy as np

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def predict_next_month_units(request):
    # user = request.user
    # # Get all the bills for the user
    # bills = ElectricityBill.objects.filter(user=user).order_by('id')
    # if not bills.exists():
    #     return JsonResponse({'error': 'No bills found for this user.'}, status=404)

    # # Extract the units used
    # units_used = [bill.units_used for bill in bills]
    # if len(units_used) < 2:
    #     return JsonResponse({'error': 'Not enough data to make a prediction.'}, status=400)

    # # Generate time points (e.g., months)
    # time_points = list(range(len(units_used)))

    # # Calculate the means of time_points and units_used
    # mean_x = sum(time_points) / len(time_points)
    # mean_y = sum(units_used) / len(units_used)

    # # Calculate the slope (m) and intercept (b) for the line of best fit
    # numerator = sum((x - mean_x) * (y - mean_y) for x, y in zip(time_points, units_used))
    # denominator = sum((x - mean_x) ** 2 for x in time_points)
    # slope = numerator / denominator
    # intercept = mean_y - slope * mean_x

    # # Predict the next month's units used
    # next_month_time_point = len(units_used)
    # predicted_units_used = slope * next_month_time_point + intercept

    # return JsonResponse({'predicted_units_used': round(predicted_units_used, 2)})
    user = request.user
    # Get all the bills for the user
    bills = ElectricityBill.objects.filter(user=user).order_by('id')
    if not bills.exists():
        return JsonResponse({'error': 'No bills found for this user.'}, status=404)

    # Extract the units used
    units_used = np.array([bill.units_used for bill in bills])
    if len(units_used) < 2:
        return JsonResponse({'error': 'Not enough data to make a prediction.'}, status=400)

    # Generate time points (e.g., months)
    time_points = np.arange(len(units_used))

    # Perform linear regression
    A = np.vstack([time_points, np.ones(len(time_points))]).T
    slope, intercept = np.linalg.lstsq(A, units_used, rcond=None)[0]

    # Predict the next month's units used
    next_month_time_point = len(units_used)
    predicted_units_used = slope * next_month_time_point + intercept

    return JsonResponse({'predicted_units_used': round(predicted_units_used, 2)})

