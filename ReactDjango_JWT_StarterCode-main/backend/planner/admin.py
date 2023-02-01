from django.contrib import admin
from .models import PlanOfDay
from .models import PlanOfWeek
from .models import PlanOfMonth

# Register your models here.
admin.site.register(PlanOfDay)
admin.site.register(PlanOfWeek)
admin.site.register(PlanOfMonth)
