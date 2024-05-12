# Fetch API

La Fetch API proporciona una interfaz JavaScript para realizar solicitudes HTTP y recuperar respuestas de manera más moderna y flexible que XMLHttpRequest. Es compatible con promesas, lo que la hace más fácil de usar y más poderosa en comparación con las técnicas tradicionales de XMLHttpRequest.

Realización de una solicitud con Fetch
Para hacer una solicitud con Fetch, simplemente llama a la función global fetch() y pasa la URL del recurso que deseas obtener. Puedes configurar el método HTTP, los encabezados y otros detalles de la solicitud utilizando opciones de configuración:

```
fetch('https://api.example.com/data')
  .then(function(response) {
    if (!response.ok) {
      throw new Error('La solicitud falló');
    }
    return response.json(); // Parsear la respuesta como JSON
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.error('Error al realizar la solicitud:', error.message);
  });
```
