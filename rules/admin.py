from django.contrib import admin
from django.db import models
from import_export import resources
from import_export.admin import ImportExportMixin

# Register your models here.

from .models import ufoslide
from .models import menuitem
from .models import post

admin.site.register(ufoslide)
admin.site.register(menuitem)
admin.site.register(post)

class merch(models.Model):
    pic1 = models.FileField(upload_to='static/images/merch/')
    pic2 = models.FileField(upload_to='static/images/merch/')
    text = models.TextField()
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10,decimal_places=2)
    weight = models.DecimalField(max_digits=10,decimal_places=2)
    
    class meta:
        ordering = ['-created_on']

    def __str__(self):
        return self.name
    
class MerchResource(resources.ModelResource):
    class Meta:
        model = merch

class MerchAdmin(ImportExportMixin, admin.ModelAdmin):
    list_display = ['name']

admin.site.register(merch, MerchAdmin)
