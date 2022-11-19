##### Viewus 2

from rest_framework import viewsets, mixins

from .models import tasks, groups

from .serializers import tasksSerializer, groupsSerializer

from rest_framework.decorators import action

from rest_framework.response import Response

from rest_framework import permissions

from .permissions import VerSuperUsuario

class tasksViewSet(viewsets.ModelViewSet):
    permission_classes = (
        VerSuperUsuario,
        permissions.DjangoModelPermissions,
  )
    queryset = tasks.objects.all()
    serializer_class = tasksSerializer

    @action (detail=True, methods=['get'])
    def groups(self, request, pk=None):
         self.pagination_class.page_size = 2
         tasks = self.get_object ()
         serializer = groupsSerializer (tasks.groups.all (), many=True)
         return Response (serializer.data)

class groupsViewSet(
    mixins.CreateModelMixin,
    mixins.RetrieveModelMixin,
    mixins.ListModelMixin,
    mixins.UpdateModelMixin,
    mixins.DestroyModelMixin,
    viewsets.GenericViewSet
):
    permission_classes = (
         VerSuperUsuario,
         permissions.DjangoModelPermissions,
    )
    queryset = groups.objects.all ()
    serializer_class = groupsSerializer