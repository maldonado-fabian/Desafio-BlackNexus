from rest_framework import viewsets
from .serializer import EventSerializer
from .models import Evento
# Create your views here.

# Podemos generar las operaciones del crud rapidamente
class EventView(viewsets.ModelViewSet):
    serializer_class = EventSerializer
    queryset = Evento.objects.all()


