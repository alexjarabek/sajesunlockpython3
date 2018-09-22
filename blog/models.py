from django.db import models
from django.utils import timezone
# Create your models here.
class Article(models.Model):
    auteur = models.CharField(max_length=64)
    titre = models.CharField(max_length=64)
    contenu = models.TextField(null=False)
    slug  = models.SlugField(max_length=50, null=False, unique=True)
    date = models.DateTimeField(default=timezone.now,
                                verbose_name="Date de parution")

    class Meta:
        verbose_name = "article"
        ordering = ['date']


    def __str__(self):
        return self.titre

class Categories(models.Model):
    name = models.CharField(max_length=64)
    article = models.ForeignKey(Article, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
