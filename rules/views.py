from django.http import HttpResponse
from django.http import JsonResponse
from django.shortcuts import render
from django.template import loader

from .db import getters
from .forms import postform
from .models import post

import json


def merch(request): 
	context = getters.getbasecontext()
	context['merchs'] = getters.getmerchs()
	return render(request, 'rules/merch.html', context)

def merchcard(request, pk):
	context = getters.getbasecontext()
	context['merch'] = getters.getmerchsbyid(pk)
	return render(request, 'rules/merchcard.html', context)

def notes(request):
	context = getters.getbasecontext()
	form = postform(request.POST or None)
	if request.method == "POST":
		if form.is_valid():
			print("\n\n form is valid")
			newpost = form.save()
        
	context.update({
		'form': form,
		'title': 'Create New Post',
		'posts': getters.getposts()
	})
	return render(request, 'rules/notes.html', context)

def more(request, skip):
	context =  {'posts': getters.getposts(skip)}	
	return render(request, 'rules/more.html', context)