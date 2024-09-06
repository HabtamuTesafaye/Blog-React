# server/users/urls.py

from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView,TokenObtainPairView
from .views import RegisterView,LoginView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('user-info/', LoginView.as_view(), name='user_info'),
]
