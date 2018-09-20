from django.shortcuts import render
from django.http import HttpResponse
from .models import Phones, Carriers , Models

# Create your views here.
def home(request):
    context = {
        "phones":  Phones.objects.all()
    }
    return render(request,"unlock/index.html", context)
