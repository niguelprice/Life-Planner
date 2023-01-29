from django.db import models
from authentication.models import User
# Create your models here.

class PlanOfDay(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE) 
    Day = models.CharField(max_length=255)
    Time = models.CharField(max_length=255)
    Task = models.CharField(max_length=255)

class PlanOfWeek(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE) 
    Day = models.CharField(max_length=255)
    Task = models.CharField(max_length=255)

class PlanOfMonth(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE) 
    Month = models.CharField(max_length=255)
    Goal = models.CharField(max_length=255)

