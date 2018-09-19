from django.contrib import admin

from .models import  Phones , Carriers , Models

# Register your models here.
admin.site.register(Phones)
admin.site.register(Carriers)
admin.site.register(Models)
