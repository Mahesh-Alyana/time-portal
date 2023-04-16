from rest_framework import serializers
from .models import Users


class SnippetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ("id", "userName")