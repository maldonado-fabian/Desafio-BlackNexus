from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework import status
from .models import Evento

class EventViewTest(APITestCase):
    
    def setUp(self):
        self.evento = Evento.objects.create(
            titulo = "test Titulo",
            descripcion = "Lorem",
            fecha = "2023-07-11",
            ubicacion = "Santiago",
            )
    #Test que verifica la efectividad de leer eventos (READ)
    def test_get_event(self):
        url = reverse('events-list')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
    #Test que verifica la efectividad de crear eventos (CREATE)
    def test_create_event(self):
        url = reverse('events-list')
        data = {
            'titulo': 'Test Evento POST',
            'descripcion':'Lorem',
            'fecha':'2023-07-11',
            'ubicacion':'test'
        }
        response = self.client.post(url,data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
    #Test que verifica la efectividad de editar eventos (UPDATE)
    def test_update_event(self):
        url = reverse('events-detail', args=[self.evento.id])
        data = {
            'titulo': 'Test Evento POST',
            'descripcion':'Lorem',
            'fecha':'2023-07-11',
            'ubicacion':'test'
        }
        response = self.client.put(url,data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
    #Test que verifica la efectividad de eliminar eventos (DELETE)
    def test_delete_event(self):
        url = reverse('events-detail', args=[self.evento.id])
        response = self.client.delete(url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)


