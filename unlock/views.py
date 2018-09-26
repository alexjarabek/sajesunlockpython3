from django.shortcuts import render
from django.http import HttpResponse, Http404, HttpResponseRedirect
from .models import Phones, Carriers , Models , Info, Price
from django.urls import reverse
from paypal.standard.forms import PayPalPaymentsForm

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
        "prices": Info.objects.all()
    }

    return render(request,"unlock/price.html",context)

def payment(request):
    if request.method == "GET":
        return HttpResponseRedirect(reverse('home'))
    name = request.POST['phone_carrier']
    if name == "":
        message = "plase select carrier"
        return HttpResponseRedirect(reverse('home'),{'message': message})
    context = {
    'imei' : request.POST['phone_imei'],
    'info' : Info.objects.filter(models=name),
    }
    return render(request,'unlock/payment.html', context)

def payment_local(request):

    return render(request, 'unlock/local.html')


def paypal(request):

    # What you want the button to do.
    paypal_dict = {
        "business": "sajesunlockbuy@gmail.com",
        "amount": "56.00",
        "item_name": "unlock htc",
        "invoice": "unique-invoice-id",
        "notify_url": request.build_absolute_uri(reverse('paypal-ipn')),
        "return": request.build_absolute_uri(reverse('retour')),
        "cancel_return": request.build_absolute_uri(reverse('cancel')),
        "custom": "premium_plan",  # Custom command to correlate to some function later (optional)
    }

    # Create the instance.
    form = PayPalPaymentsForm(initial=paypal_dict)
    context = {"form": form}
    return render(request, "unlock/paypal.html", context)

def retour(request):
    return HttpResponse("your payment was aprover!")

def cancel(request):
    return HttpResponse("your payment was refuser!")
