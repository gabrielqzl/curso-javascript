# Biblioteca Axios

Axios es una biblioteca JavaScript popular para realizar solicitudes HTTP desde el navegador o desde Node.js. Proporciona una interfaz simple y fácil de usar para hacer solicitudes HTTP, gestionar respuestas y trabajar con promesas.

## Características principales de Axios:

- Facilidad de uso: Axios proporciona una API simple y fácil de usar para realizar solicitudes HTTP.
- Soporte para promesas: Axios utiliza promesas para manejar las respuestas de las solicitudes, lo que facilita el manejo de operaciones asíncronas.
- Interceptores de solicitud y respuesta: Axios permite la definición de interceptores para realizar acciones antes de enviar una solicitud o después de recibir una respuesta.
- Transformadores de datos: Permite transformar los datos de la solicitud o la respuesta antes de ser enviados o después de ser recibidos.
- Soporte para solicitudes concurrentes: Axios admite solicitudes concurrentes y paralelas, lo que significa que puedes realizar múltiples solicitudes al mismo tiempo.

### Ejemplo de uso de Axios:

```
// Realizar una solicitud GET
axios.get('https://api.example.com/data')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

// Realizar una solicitud POST
axios.post('https://api.example.com/data', {
    nombre: 'Juan',
    edad: 30
  })
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
```

En este ejemplo, Axios se utiliza para realizar solicitudes GET y POST a una API ficticia. La respuesta de la solicitud se maneja utilizando el método then para el caso de éxito y el método catch para el caso de error.

Axios se puede utilizar tanto en el navegador como en Node.js, lo que lo convierte en una opción versátil para realizar solicitudes HTTP en aplicaciones web y de servidor.