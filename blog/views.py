from django.shortcuts import render
from django.http import HttpResponse, Http404
from .models import Article, Categories

# Create your views here.
def index(request):
    article = Article.objects.all()

    return render(request ,"index.html", {"article":article})

def articles(request, slug):
    try:
        article = Article.objects.get(slug=slug)
    except Article.DoesNotExist:
        raise Http404

    return render(request ,'article.html', {'article': article})
