#Relacionamentos Model e Serializers

from rest_framework import serializers

from .models import tasks, groups

class groupsSerializer(serializers.ModelSerializer):


    class Meta:
        model = groups
        fields = [
            'id',
            'task',
            'description_task',
            'evaliator',
            'email',
            'comment',
            'note',
        ]

class tasksSerializer(serializers.ModelSerializer):
    # Nested Relationship - many  --> muitos grupos
    #groups = groupsSerializer(many=True, read_only=True)
    # HyperLinked Related Field
    groups = serializers.HyperlinkedRelatedField(many=True, read_only=True, view_name='groups-detail')
    # Primary Key Relate Field
    # avaliacoes = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = tasks
        fields = (
            'id',
            'name',
            'description',
            'duration',
            'priority',
            'Create_at',
            'updated_at',
            'groups',
        )






