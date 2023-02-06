from django.urls import path, include
from planner import views


urlpatterns = [
    path('', views.PlanDayList),
    path('<str:day>/', views.plan_task),
    path('<int:pk>/', views.plan_task_id),
]



