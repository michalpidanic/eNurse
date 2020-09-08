from django.db import models

# Create your models here.


class Announcement(models.Model):
    title = models.CharField(max_length=200, default='Nazov')
    author = models.CharField(
        max_length=200, default='Pani doktorka', null=True, blank=True)
    announcement = models.TextField(default='Oznam')
    date = models.DateField(auto_now=False, auto_now_add=False)
