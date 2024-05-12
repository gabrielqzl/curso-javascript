# XMLHttpRequest()

La interfaz XMLHttpRequest en JavaScript se utiliza para hacer solicitudes HTTP asíncronas desde un navegador web. Esta API permite enviar y recibir datos desde un servidor web sin tener que recargar la página.

### Creación de un objeto XMLHttpRequest
Para crear un objeto XMLHttpRequest, puedes utilizar el constructor XMLHttpRequest():

```
var xhttp = new XMLHttpRequest();
```

## Configuración de la solicitud
Una vez creado el objeto XMLHttpRequest, puedes configurar la solicitud utilizando los métodos open() y setRequestHeader():

```

xhttp.open('GET', 'https://api.example.com/data', true);
xhttp.setRequestHeader('Content-Type', 'application/json');

```

### Manejo de eventos
Puedes manejar diferentes eventos relacionados con la solicitud utilizando propiedades como onload, onerror, onreadystatechange, etc. Por ejemplo:


```
xhttp.onload = function() {
  if (xhttp.status >= 200 && xhttp.status < 300) {
    console.log('Respuesta exitosa:', xhttp.responseText);
  } else {
    console.error('Error en la solicitud:', xhttp.statusText);
  }
};
```
### Envío de la solicitud
Una vez configurada la solicitud, puedes enviarla utilizando el método send():

```
xhttp.send();
```