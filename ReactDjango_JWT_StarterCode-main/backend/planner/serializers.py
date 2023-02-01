from rest_framework import serializers
from .models import PlanOfDay
from .models import PlanOfWeek
from .models import PlanOfMonth

class PlanofDaySerializer(serializers.ModelSerializer):
    class Meta:
        model = PlanOfDay
        fields = ['id', 'day', 'time', 'task' ,'user_id']
        depth = 1

class PlanofWeekSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlanOfWeek
        fields = ['id', 'day', 'task' ,'user_id']
        depth = 1

class PlanofMonthSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlanOfMonth
        fields = ['id', 'month', 'goal' ,'user_id']
        depth = 1