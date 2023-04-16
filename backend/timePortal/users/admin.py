from django.contrib import admin
from .models import Users


# Register your models here.
class MemberAdmin(admin.ModelAdmin):
    list_display = (
        "userName",
        "emailId",
    )


admin.site.register(Users, MemberAdmin)
