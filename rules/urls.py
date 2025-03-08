from django.urls import path

from . import views

urlpatterns = [
    path('', views.merch, name='main'),
    path('merch', views.merch, name='merch'),
    path('notes', views.notes, name='notes'),
    path('notes/more/<int:skip>', views.more, name='more'),
    path('merchcard/<int:pk>', views.merchcard, name='merchcard'),
]