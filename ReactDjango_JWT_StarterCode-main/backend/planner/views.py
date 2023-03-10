from django.shortcuts import get_object_or_404
from django.shortcuts import get_list_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import PlanOfDay
from .models import PlanOfWeek
from .models import PlanOfMonth
from .serializers import PlanofDaySerializer
from .serializers import PlanofWeekSerializer
from .serializers import PlanofMonthSerializer

# Create your views here.

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def PlanDayList(request):
    if request.method == 'POST':
        serializer = PlanofDaySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        PlansOfDay = PlanOfDay.objects.filter(user_id=request.user.id)
        serializer = PlanofDaySerializer(PlansOfDay, many=True)
        return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def day_task(request, day):
    PlansOfDay = get_list_or_404(PlanOfDay, day=day)
    if request.method == 'GET':
        serializer = PlanofDaySerializer(PlansOfDay, many=True)
        return Response(serializer.data)

@api_view(['PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def plan_task_id(request, pk):
    PlansOfDay = get_object_or_404(PlanOfDay, pk=pk)
    if request.method == 'PUT':
        serializer = PlanofDaySerializer(PlansOfDay, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data,)
    elif request.method == 'DELETE':
        PlansOfDay.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def PlanWeekTask(request):
    if request.method == 'POST':
        serializer = PlanofWeekSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        PlansOfWeek = PlanOfWeek.objects.filter(user_id=request.user.id)
        serializer = PlanofWeekSerializer(PlansOfWeek, many=True)
        return Response(serializer.data)

@api_view(['PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def week_plan_task_id(request, pk):
    PlansOfWeek = get_object_or_404(PlanOfWeek, pk=pk)
    if request.method == 'PUT':
        serializer = PlanofWeekSerializer(PlansOfWeek, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        PlansOfWeek.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def PlanMonthTask(request):
    if request.method == 'POST':
        serializer = PlanofMonthSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        PlansOfMonth = PlanOfMonth.objects.filter(user_id=request.user.id)
        serializer = PlanofMonthSerializer(PlansOfMonth, many=True)
        return Response(serializer.data)

@api_view(['PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def Month_plan_task_id(request, pk):
    PlansOfMonth = get_object_or_404(PlanOfMonth, pk=pk)
    if request.method == 'PUT':
        serializer = PlanofMonthSerializer(PlansOfMonth, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        PlansOfMonth.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


