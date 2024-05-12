# Caché

En el contexto de la web, la cache se refiere a un lugar donde se almacenan temporalmente datos para mejorar la velocidad y el rendimiento de las aplicaciones web. La cache puede estar ubicada en varios niveles, incluidos el navegador del usuario, servidores intermedios (como servidores proxy) y el propio servidor web.

### Tipos de Caché:
- Caché del navegador: Los navegadores web almacenan en caché recursos como archivos CSS, JavaScript, imágenes y otros tipos de archivos descargados durante la navegación. Esto significa que si un usuario vuelve a visitar una página web, el navegador puede cargar recursos desde la cache local en lugar de volver a descargarlos del servidor.
- Caché de DNS: Los navegadores web también pueden almacenar en caché las consultas DNS para acelerar el proceso de resolución de nombres de dominio. Esto significa que si un usuario visita un sitio web varias veces, el navegador puede usar la información almacenada en caché para traducir el nombre de dominio a una dirección IP sin tener que realizar una nueva consulta DNS.
- Caché de servidor intermedio (proxy): Los servidores proxy pueden almacenar en caché recursos solicitados por los clientes, lo que reduce el tiempo de respuesta y el ancho de banda utilizado. Esto es especialmente útil en redes grandes donde múltiples clientes acceden a los mismos recursos.

### Beneficios de la Caché:
- Mejora el rendimiento: Al almacenar en caché recursos, las aplicaciones web pueden cargar más rápidamente, ya que los recursos pueden ser recuperados localmente en lugar de descargarlos repetidamente del servidor.
- Reduce la carga del servidor: Al reducir la cantidad de solicitudes que llegan al servidor, la caché ayuda a disminuir la carga del servidor y a optimizar el uso de recursos del servidor.
- Ahorra ancho de banda: Al utilizar recursos almacenados en caché en lugar de descargarlos repetidamente del servidor, se reduce el consumo de ancho de banda, lo que puede resultar en costos más bajos de alojamiento y operación para los propietarios del sitio web.

### Ejemplo:
Por ejemplo, si un usuario visita un sitio web que utiliza una caché del navegador, la primera vez que visita el sitio, el navegador descargará y almacenará en caché los archivos CSS, JavaScript e imágenes utilizados en la página. Cuando el usuario visita la página nuevamente, el navegador puede cargar estos recursos desde la cache local en lugar de descargarlos nuevamente del servidor, lo que resulta en tiempos de carga más rápidos y una mejor experiencia de usuario