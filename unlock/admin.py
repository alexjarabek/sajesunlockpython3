from django.contrib import admin

from .models import  Phones , Carriers , Models, Info, histories

# Register your models here.

class ModelsAdmin(admin.ModelAdmin):
    list_display = ("model",)
    list_filtre = ('model', 'carrier', "phone")
    ordering = ('model',)
    search_fields = ('model', 'phone', 'carrier')

class historiesAdmin(admin.ModelAdmin):
    list_display = ("email", "number", "idpay", "imei", "info")
    list_filtre = ('imei', 'email', "idpay")
    ordering = ('date',)
    search_fields = ('imei', 'email', 'number')

admin.site.register(Phones)
admin.site.register(Carriers)
admin.site.register(Models, ModelsAdmin)
admin.site.register(Info)
admin.site.register(histories, historiesAdmin)
