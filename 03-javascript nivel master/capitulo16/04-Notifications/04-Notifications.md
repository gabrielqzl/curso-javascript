# Notificaciones Web

Las notificaciones web son mensajes que aparecen en el navegador del usuario, incluso cuando el sitio web no está abierto en la pestaña del navegador. Permiten a los sitios web enviar actualizaciones importantes o notificaciones relevantes a los usuarios, incluso cuando no están interactuando activamente con el sitio.

### Características clave:

1. **Visibles fuera del sitio**: Las notificaciones web pueden ser mostradas incluso cuando el sitio web no está activo en la pestaña del navegador.
2. **Interactividad**: Las notificaciones pueden incluir botones de acción que permiten a los usuarios realizar acciones directamente desde la notificación.
3. **Personalización**: Los sitios web pueden personalizar el contenido y el aspecto de las notificaciones para adaptarse a las necesidades específicas de los usuarios.

### Implementación:

Las notificaciones web se implementan utilizando el API de Notificaciones (Notification API) en JavaScript. Aquí tienes un ejemplo básico de cómo mostrar una notificación:

```
if (Notification.permission === 'granted') {
  // Mostrar la notificación si el permiso ha sido concedido
  new Notification('¡Hola mundo!');
} else if (Notification.permission !== 'denied') {
  // Solicitar permiso al usuario para mostrar notificaciones
  Notification.requestPermission().then(function(permission) {
    if (permission === 'granted') {
      // Mostrar la notificación si el permiso ha sido concedido
      new Notification('¡Hola mundo!');
    }
  });
}
```

En este ejemplo:

1. Verificamos si el permiso para mostrar notificaciones ya ha sido concedido.
2. Si el permiso ya ha sido concedido, mostramos una notificación.
3. Si el permiso no ha sido denegado previamente, solicitamos permiso al usuario para mostrar notificaciones. Si el permiso es concedido, mostramos la notificación.

**Nota**: El comportamiento exacto puede variar según el navegador y la configuración del usuario. Algunos navegadores pueden requerir una conexión segura (HTTPS) para mostrar notificaciones.

¡Este es un ejemplo básico para comenzar! Las notificaciones web pueden ser personalizadas con imágenes, botones de acción y más para adaptarse a las necesidades específicas del sitio web y los usuarios.