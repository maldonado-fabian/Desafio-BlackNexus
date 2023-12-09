from django.db import models

# Create your models here.
class Evento(models.Model):
    titulo = models.CharField(max_length = 200)
    descripcion = models.TextField(blank = True)
    fecha = models.CharField(max_length = 200)
    ubicacion = models.CharField(max_length = 200)

    def __str__(self):
        return self.titulo
 