from django.shortcuts import render
from django.http import HttpResponse
from .models import Phones, Carriers , Models , Info, Price

# Create your views here.
def home(request):
    context = {
        'models': Models.objects.filter(phone=1),
        "phones":  Phones.objects.all(),
        "carriers" : Models.objects.filter(carrier=3)
    }
    return render(request,"unlock/index.html", context)

def price(request):
    context = {
        "prices": Price.objects.all()
    }

    return render(request,"unlock/price.html",context)

def payment(request):
    name = request.POST['phone_carrier']
    context = {
    'imei' : request.POST['phone_imei'],
    'info' : Info.objects.filter(models=name)
    }
    return render(request,'unlock/payment.html', context)

def payment_local(request):

    return render(request, 'unlock/local.html')
