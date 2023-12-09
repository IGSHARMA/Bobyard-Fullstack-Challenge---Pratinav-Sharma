from django.shortcuts import render, HttpResponse
from rest_framework import generics, viewsets
from .models import Comment
from .serializers import CommentSerializer
from django.utils import timezone

# Generic view for listing all comments
class CommentListAPIView(generics.ListAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

# Generic view for creating a new comment
class CommentCreateAPIView(generics.CreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def perform_create(self, serializer):
        serializer.save(date=timezone.now())

# Generic view for updating an existing comment
class CommentUpdateAPIView(generics.UpdateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

# Generic view for deleting an existing comment
class CommentDestroyAPIView(generics.DestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

# Generic for allowing fetching a comment's details, updating it, or deleting it.
class CommentDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

def home(request):
    return render(request, "home.html")