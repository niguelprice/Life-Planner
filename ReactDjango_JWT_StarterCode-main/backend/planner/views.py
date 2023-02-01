from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import PlanofDaySerializer
from .serializers import PlanofWeekSerializer
from .serializers import PlanofMonthSerializer
from .models import PlanOfDay
from .models import PlanOfWeek
from .models import PlanOfMonth
# Create your views here.


@api_view(['GET', 'POST'])
def PlanDayList(request):

    if request.method == 'GET':
        PlansOfDay = PlanOfDay.objects.all()
        serializer = PlanofDaySerializer(PlansOfDay, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = PlanofDaySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
