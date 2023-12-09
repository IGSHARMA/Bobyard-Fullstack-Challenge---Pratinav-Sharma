from django.urls import path
from . import views
from .views import (
    CommentListAPIView, 
    CommentCreateAPIView, 
    CommentDetailAPIView, 
    home
)

urlpatterns = [
    path('comments/', CommentListAPIView.as_view(), name='comment-list'),
    path('comments/create/', CommentCreateAPIView.as_view(), name='comment-create'),
    path('comments/<int:pk>/', CommentDetailAPIView.as_view(), name='comment-detail'),
    path("", home, name="home")
]

