from django.db import models
from authentication.models import User
# Create your models here.

class PlanOfDay(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE) 
    day = models.CharField(max_length=255)
    time = models.CharField(max_length=255)
    task = models.CharField(max_length=255)

class PlanOfWeek(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE) 
    week_of_year = models.CharField(max_length=255)
    task = models.CharField(max_length=255)

class PlanOfMonth(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE) 
    month = models.CharField(max_length=255)
    goal = models.CharField(max_length=255)

