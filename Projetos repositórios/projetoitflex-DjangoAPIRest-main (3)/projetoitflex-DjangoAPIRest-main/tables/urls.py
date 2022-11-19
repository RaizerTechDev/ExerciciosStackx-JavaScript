from django.urls import path

from .views_old import tasksAPIView, groupsAPIView

from .views import tasksViewSet, groupsViewSet

from rest_framework.routers import SimpleRouter

router = SimpleRouter()
router.register ('tasks', tasksViewSet),
router.register ('groups', groupsViewSet),

urlpatterns = [
    path ('tasks/', tasksAPIView.as_view (), name='tasks'),
    path ('groups/', groupsAPIView.as_view (), name='groups'),

]

