from django.contrib import admin

from .models import tasks, groups




# Register your models here.
class tasksAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'duration', 'priority', 'Create_at', 'updated_at')
    list_filter = ('name', 'updated_at',)


admin.site.register(tasks, tasksAdmin)


class groupsAdmin(admin.ModelAdmin):
    list_display = ('task', 'description_task', 'evaliator', 'email', 'comment', 'note')
    list_filter = ('task',)


admin.site.register(groups, groupsAdmin)
