# Realizações das queries

# 1.	As tasks com prioridade menor que 3
# >>> tasks.objects.filter(priority__lte=3)
# <QuerySet [<tasks: Study>, <tasks: Blog>, <tasks: Articles>]>
# >>>
# 2.	As tasks com duração menor que 01 hora
# >>> tasks.objects.filter(duration__hour__lte=1)
# <QuerySet [<tasks: Study>, <tasks: Technical Support to Customers>, <tasks: Articles>>

# 3.	As tasks com duração maior que 01 hora
# tasks.objects.filter(duration__hour__gt=1)
# <QuerySet [<tasks: Software Development>, <tasks: Blog>, <tasks: Onboarding>]>

# 4.	As tasks com prioridade entre 2 e 4 e duração inferior a 2 horas
# >>> tasks.objects.filter(priority__in=[2,4]) & tasks.objects.filter(duration__hour__lt=2)
# <QuerySet [<tasks: Technical Support to Customers>, <tasks: Articles>]>
