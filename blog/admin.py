from django.contrib import admin
from django.utils.text import Truncator

from .models import Article, Categories

# Register your models here.
class ArticleAdmin(admin.ModelAdmin):
    list_display = ('titre', 'auteur', 'date',)
    list_filter = ('auteur',)
    date_hierarchy = 'date'
    ordering = ('date', )
    search_fields = ('titre', 'contenu')

    def apercu_contenu(self, Article):
        return Truncator(Article.contenu).chars(40, truncate='...')

    apercu_contenu.short_description = 'Aperçu du contenu'

admin.site.register(Article, ArticleAdmin)
admin.site.register(Categories)
