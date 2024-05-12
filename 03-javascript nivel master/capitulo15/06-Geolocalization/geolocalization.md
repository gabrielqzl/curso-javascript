# Geolocalización en JavaScript

La geolocalización en JavaScript permite a las aplicaciones web obtener la ubicación geográfica del usuario a través del navegador. Esto se puede utilizar para una variedad de propósitos, como proporcionar contenido personalizado basado en la ubicación del usuario, ofrecer direcciones y mapas, y más.

### Uso de la API de Geolocalización:

- Obtener la Ubicación Actual: Se utiliza la API de geolocalización del navegador para obtener la ubicación actual del usuario.
- Permisos de Geolocalización: El navegador puede solicitar permiso al usuario para acceder a su ubicación. Esto puede ocurrir automáticamente o a través de una solicitud explícita.
- Manejar la Ubicación Obtenida: Una vez que se obtiene la ubicación del usuario, se puede utilizar en la aplicación web para proporcionar servicios basados en la ubicación.

### getCurrentPosition()
El método getCurrentPosition() es parte de la API de geolocalización y se utiliza para obtener la ubicación actual del usuario. Este método toma hasta tres argumentos: una función de devolución de llamada para manejar la posición obtenida, una función de devolución de llamada para manejar cualquier error que pueda ocurrir y un objeto de opciones para configurar el comportamiento de la solicitud de geolocalización.

### Parámetros

- position: La función de devolución de llamada position se ejecuta cuando se obtiene exitosamente la ubicación del usuario. Recibe un objeto Position que contiene la información de la ubicación.
- error: La función de devolución de llamada error se ejecuta si hay algún error al obtener la ubicación del usuario. Recibe un objeto PositionError que describe el error que ocurrió.
- options: El objeto options es opcional y se utiliza para configurar el comportamiento de la solicitud de geolocalización. Puede contener propiedades como enableHighAccuracy, timeout y maximumAge.

### Propiedades de options

- enableHighAccuracy: Un valor booleano que indica si se desea una lectura de alta precisión. Si está establecido en true, el navegador intentará obtener la mejor lectura posible, lo que puede requerir más tiempo y consumo de batería.
- timeout: El tiempo máximo, en milisegundos, que se permite para obtener la ubicación. Si la solicitud de geolocalización no se completa dentro de este tiempo, se ejecutará la función de devolución de llamada de error.
- maximumAge: La máxima edad, en milisegundos, de una ubicación que el navegador está dispuesto a aceptar. Si una ubicación en caché está disponible y su edad es menor que el valor de maximumAge, se devolverá esa ubicación en lugar de solicitar una nueva ubicación al dispositivo del usuario.

Estas propiedades permiten configurar cómo se obtiene la ubicación del usuario y pueden ayudar a optimizar el rendimiento y la precisión de la geolocalización en una aplicación web.

### Ejemplo de Uso:

```
// Verificar si el navegador soporta la API de geolocalización
if ("geolocation" in navigator) {
  // Obtener la ubicación del usuario
  navigator.geolocation.getCurrentPosition(function(position) {
    // Acceder a la latitud y longitud
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    // Utilizar la ubicación obtenida
    console.log("Ubicación actual:", latitude, longitude);
  }, function(error) {
    // Manejar errores
    console.error("Error al obtener la ubicación:", error);
  });
} else {
  // El navegador no soporta la geolocalización
  console.log("Geolocalización no soportada por este navegador");
}

```
Este ejemplo utiliza getCurrentPosition() para obtener la ubicación actual del usuario. Si se obtiene con éxito, se maneja la posición resultante y se pueden acceder a las coordenadas de latitud y longitud. Si hay un error o el usuario deniega el acceso a su ubicación, se maneja adecuadamente.

-getCurrentPosition()
 - parametros(position, error, options)
 - propiedades de option(enableHigjtAccuracy, timeout, maximunAge)