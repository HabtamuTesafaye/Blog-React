from django.db import models
from django.conf import settings  # Import settings to access AUTH_USER_MODEL

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    image = models.ImageField(upload_to='blog_images/', blank=True, null=True)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)  # Use AUTH_USER_MODEL
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
