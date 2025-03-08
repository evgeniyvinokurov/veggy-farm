from rules.models import ufoslide
from rules.models import menuitem
from rules.admin import merch
from rules.models import post

from django.shortcuts import get_object_or_404

def getbasecontext():
	return {
		"menuitems": menuitem.objects.values("url", "text", "style"),
		"slides": ufoslide.objects.values("upload")
	}

def getmerchs():
	return list(merch.objects.values("id", "pic2", "name", "price"))

def getmerchsbyid(primary_key):
	return get_object_or_404(merch, pk=primary_key)

def getposts(skip=0):
	posts = post.objects.filter(status=1).order_by('-created_on')[skip:skip+2].values("title", "content")
	print(posts)	
	return list(posts)
