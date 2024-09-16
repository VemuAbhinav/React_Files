
from django.contrib import admin
from django.urls import path, include
from base.views import CreateUserView
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('base/user/register/',CreateUserView.as_view(),name="register"),
    # path('base/user/profile/', UserProfileCreateView.as_view(), name='profile'),
    # path('base/user/usage/', ElectricityUsageCreateView.as_view(), name='usage'),
    path('base/', include('base.urls')),
    path('base/token/',TokenObtainPairView.as_view(),name="get_token"),
    path('base/token/refresh/',TokenRefreshView.as_view(),name="refresh"),
    path('base-auth/',include("rest_framework.urls"))
 
]
