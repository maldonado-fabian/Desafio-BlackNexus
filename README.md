# Django React Boilerplate

## Sobre el Desafio

En el presente desafio se ha desarollado una aplicacion de registro y cisualizacion de eventos. para realizar este proyecto se utilizaron las siguientes tecnologias.

-   [React](https://react.dev/), para levantar el frotnend
-   [Django](https://www.djangoproject.com/), para el desarollo del backend

-   [Tailwind](https://tailwindcss.com/), para crear los estilos
-   [Django rest framework](https://www.django-rest-framework.org/), para las operaciones CRUD y testeos
-   [Django cosheaders](https://pypi.org/project/django-cors-headers/), para comunicar el fronted y el backend


## ¿Como levantar la aplicacion?

### Backend

- En primera instancia debemos abrir la carpeta de desafio black nexus y movernos por la terminal hacia el backend. Ya en el backend debemos utilizar nuestro entorno virual cambiando nuestro interprete al del entorno virutal escribiendo en la busqueda de nuestro editor de texto `>Python: Select Interpreter` y selecionamos la version recomendada que es la que se encuentra en nuestro entorno vitual, se puede identificar como ('venv':venv)

- luego, antes de levantar nuestro servidor de backend quizas interesa realizar los test unitarios para saber que todo anda bien. Lo haremos ingresando por consola (recordemos que nuestra consola ya deberia estar utilziando nuestro venv) `python manage.py test`

- Luego de verificar los test, podemos levantar nuestro serrvidor utilizando el comando `python manage.py runserver`

De esta forma tenemos listo nuestro servidor de backend corriendo en un servidor local.

### Frontend

- Para ejecutar el frontend el proceso es mas sencillo, debemos abrir una nueva terminal sin cerrar la terminal que previamente tiene levantado nuestro servidor de backend y en esta nueva terminal debemos escribir el comando `npm run dev`.

Abrimos el servidor lcoal en el cual se ha alojado el el frontend y tenemos nuestra aplicacion lista para usar.

### Video explicativo

- [Enlace](https://www.youtube.com/watch?v=HPfyc3x3VXE)


