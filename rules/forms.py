from django import forms

from . import models
    
class postform(forms.ModelForm):
    class Meta:
        model = models.post
        fields = ['title', 'content']