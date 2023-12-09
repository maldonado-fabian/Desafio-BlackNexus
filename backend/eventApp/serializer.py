from rest_framework import serializers
from .models import Evento


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Evento
        # Seleccionar los que queremos
        # fields = ('id','titulo','descripcion','fecha','ubicacion')
        # Seleccionar todos
        fields = '__all__'