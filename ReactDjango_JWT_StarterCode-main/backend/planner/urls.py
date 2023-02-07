from django.urls import path, include
from planner import views


urlpatterns = [
    path('', views.PlanDayList),
    path('day/<str:day>/', views.day_task),
    path('<int:pk>/', views.plan_task_id),
    path('week_of_year/', views.PlanWeekTask),
    path('week_of_year/<str:pk>/', views.week_plan_task_id),
    path('month/', views.PlanMonthTask),
    path('month/<str:pk>/', views.Month_plan_task_id),
]



