from django.urls import path, include
from planner import views


urlpatterns = [
    path('', views.PlanDayList),
    path('all/', views.PlanDayList),
]
