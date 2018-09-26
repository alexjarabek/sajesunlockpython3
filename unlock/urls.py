from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('prices', views.price, name='prices'),
    path('payment', views.payment, name='payment'),
    path('payment/payment_local', views.payment_local, name='local'),
    path('payment/paypal', views.paypal, name='paypal'),
    path('payment/retour', views.retour, name='retour'),
    path('payment/cancel', views.cancel, name='cancel'),
]
