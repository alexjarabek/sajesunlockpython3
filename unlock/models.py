from django.db import models

# Create your models here.
class Phones(models.Model):
    name = models.CharField(max_length=64)

    def __str__(self):
        return f'{self.id} and {self.name}'

class Carriers(models.Model):
    carrier = models.CharField(max_length=64)

    def __str__(self):
        return f"{self.id} and {self.carrier}"

class Models(models.Model):
    model = models.CharField(max_length=64)
    Phone = models.ForeignKey(Phones ,on_delete=models.CASCADE )
    Carrier = models.ForeignKey(Carriers , on_delete=models.CASCADE )
