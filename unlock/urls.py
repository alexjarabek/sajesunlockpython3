from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='index'),
    path('prices', views.price, name='prices'),
    path('payment', views.payment, name='payment'),
    path('payment/payment_local', views.payment_local, name='local')
]
