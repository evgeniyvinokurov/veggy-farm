from django.db import models
from django.contrib.postgres.fields import ArrayField

STATUS = (
    (0,"Draft"),
    (1,"Publish")
)

# Create your models here.

class ufoslide(models.Model):
    upload = models.FileField(upload_to='static/images/')

class menuitem(models.Model):
    url = models.CharField(max_length=255)
    text = models.CharField(max_length=25)
    style = models.CharField(max_length=255, default='')

class post(models.Model):
    title = models.CharField(max_length=200, unique=True)
    updated_on = models.DateTimeField(auto_now= True)
    content = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)
    status = models.IntegerField(choices=STATUS, default=0)

    class meta:
        ordering = ['-created_on']

    def __str__(self):
        return self.title
