from django.db import models

class Comment(models.Model):
    text = models.TextField()
    author = models.CharField(max_length=255)
    date = models.DateTimeField()
    likes = models.IntegerField(default=0)
    image = models.URLField(null=True, blank=True)

    def __str__(self):
        return self.text