from django.db import models


# Create your models here.
class Users(models.Model):
    userName = models.CharField(max_length=255)
    emailId = models.EmailField()

    def __str__(self):
        return f"{self.userName}-{self.emailId}"
