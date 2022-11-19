from django.db import models

# Create your models here.

class tasks(models.Model):
    name = models.CharField(max_length=255, unique=True)
    description = models.CharField(max_length=255)
    duration = models.TimeField()
    priority = models.DecimalField(max_digits=2, decimal_places=1)
    Create_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return self.name


class groups(models.Model):
    task = models.ForeignKey(tasks, related_name="groups", on_delete=models.CASCADE)
    description_task = models.CharField(max_length=255)
    evaliator = models.CharField(max_length=255)
    email = models.EmailField()
    comment = models.TextField(blank=True, default='')
    note = models.DecimalField(max_digits=2, decimal_places=1)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return f' Task: {self.task}, Name_Task{self.description_task}, Evaliator: {self.evaliator}, Email: {self.email}, Comment: {self.comment}, Note: {self.note}'
