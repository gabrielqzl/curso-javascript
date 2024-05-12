# AJAX (Asynchronous JavaScript and XML)

AJAX es una técnica de desarrollo web que permite realizar solicitudes asíncronas al servidor desde una página web sin tener que recargar toda la página. Esto permite actualizar partes específicas de una página web de manera dinámica y mejorar la experiencia del usuario.

## Funcionamiento de AJAX

AJAX utiliza el objeto XMLHttpRequest o la Fetch API en JavaScript para realizar solicitudes HTTP asíncronas. Después de enviar una solicitud al servidor, la página web puede continuar ejecutando otras tareas mientras espera la respuesta del servidor. Una vez que se recibe la respuesta, se puede actualizar el contenido de la página web sin recargarla por completo.

Ejemplo de Uso de AJAX con XMLHttpRequest
 ```
 // Crear una instancia de XMLHttpRequest
var xhttp = new XMLHttpRequest();

// Configurar la solicitud
xhttp.open('GET', 'https://api.example.com/data', true);

// Manejar el evento de carga
xhttp.onload = function() {
  if (xhttp.status >= 200 && xhttp.status < 300) {
    // La solicitud fue exitosa
    console.log(xhttp.responseText);
  } else {
    // La solicitud falló
    console.error('Error al realizar la solicitud:', xhttp.statusText);
  }
};

// Manejar errores de red
xhttp.onerror = function() {
  console.error('Error de red al realizar la solicitud');
};

// Enviar la solicitud
xhttp.send();

 ```