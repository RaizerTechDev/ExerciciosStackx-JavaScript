from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import tasks, groups
from .serializers import tasksSerializer, groupsSerializer

class tasksAPIView(APIView):
     """
      API para tarefas
     """

     def get(self, request):
         task = tasks.objects.all()
         serializer = tasksSerializer(task, many=True)
         return Response(serializer.data)

     @staticmethod
     def post(request):
         serializer = tasksSerializer(data=request.data)
         serializer.is_valid(raise_exception=True)
         serializer.save()
         return Response( {"mensagem": "cadastrado com sucesso!!!"}, status=status.HTTP_201_CREATED)

class groupsAPIView(APIView):
       """
         API para grupos
       """

       def get(self, request):
           group = groups.objects.all()
           serializer = groupsSerializer(group, many=True)
           return Response(serializer.data)

       def post(self, request):
           serializer = groupsSerializer(data=request.data)
           serializer.is_valid(raise_exception=True)
           serializer.save()
           return Response(serializer.data, status=status.HTTP_201_CREATED)