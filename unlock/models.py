from django.db import models
from django.utils import timezone

# Create your models here.
class Phones(models.Model):
    name = models.CharField(max_length=64)

    def __str__(self):
        return f'{self.name}'

class Carriers(models.Model):
    carrier = models.CharField(max_length=64)

    def __str__(self):
        return f"{self.carrier}"

class Models(models.Model):
    model = models.CharField(max_length=64)
    phone = models.ForeignKey(Phones ,on_delete=models.CASCADE )
    carrier = models.ForeignKey(Carriers , on_delete=models.CASCADE )

    def __str__(self):
        return f"{self.phone}  -  {self.model}  -  {self.carrier}"


class Info(models.Model):
    price = models.IntegerField()
    time = models.IntegerField(null=True)
    models = models.ForeignKey(Models , on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.models} prix {self.price} USD duration {self.time} day"

class histories(models.Model):
    imei = models.BigIntegerField(null=False)
    email = models.EmailField(max_length=100, null=False)
    number = models.IntegerField(null=True)
    info  = models.ForeignKey(Info, on_delete=models.CASCADE)
    date = models.DateTimeField(default=timezone.now)
    idpay = models.IntegerField(null=True)

    def __str__(self):
        return f"{self.info} the imei is {self.imei} l'email ou le numero du cllient est {self.email} || {self.number} date {self.date} id pay {self.idpay}"
