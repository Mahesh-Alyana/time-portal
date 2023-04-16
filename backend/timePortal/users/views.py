from django.template import loader
from django.shortcuts import render
from django.http import HttpResponse
from .models import Users
from rest_framework import generics
from .models import Users
from .serializers import SnippetSerializer


# Create your views here
class UserList(generics.ListCreateAPIView):
    queryset = Users.objects.all()
    serializer_class = SnippetSerializer


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Users.objects.all()
    serializer_class = SnippetSerializer


def users(request):
    mymembers = Users.objects.all().values()
    template = loader.get_template("users.html")
    context = {
        "mymembers": mymembers,
    }
    return HttpResponse(template.render(context, request))
