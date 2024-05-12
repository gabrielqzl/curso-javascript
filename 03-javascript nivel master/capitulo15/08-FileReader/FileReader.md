# FileReader en JavaScript

FileReader es una interfaz de JavaScript que permite a las aplicaciones web leer archivos locales del sistema del usuario, siempre y cuando el usuario haya seleccionado explícitamente los archivos mediante un elemento <input type="file"> o una operación de arrastrar y soltar.

### Funciones Principales:
 
 1. readAsText(file): Lee el contenido de un archivo como texto.
 2. readAsDataURL(file): Lee el contenido de un archivo y lo devuelve como un objeto de tipo data: URL, que puede ser utilizado para mostrar el contenido de la imagen directamente en una página web.
 3. readAsArrayBuffer(file): Lee el contenido de un archivo como un ArrayBuffer, que es útil para leer archivos binarios como imágenes, videos, etc.
 4. readAsBinaryString(file): Lee el contenido de un archivo como una cadena binaria.

 ### Ejemplo de uso
 ```
 // Obtener el elemento de entrada de archivo
var fileInput = document.getElementById('fileInput');

// Escuchar el evento 'change' en el elemento de entrada de archivo
fileInput.addEventListener('change', function(event) {
  // Obtener el archivo seleccionado
  var file = event.target.files[0];

  // Crear una nueva instancia de FileReader
  var reader = new FileReader();

  // Configurar la función de devolución de llamada para cuando se complete la lectura del archivo
  reader.onload = function(event) {
    // Mostrar el contenido del archivo en la consola
    console.log(event.target.result);
  };

  // Leer el contenido del archivo como texto
  reader.readAsText(file);
});
```
En este ejemplo, estamos utilizando FileReader para leer el contenido de un archivo de texto seleccionado por el usuario a través de un elemento de entrada de archivo (<input type="file">). Cuando el usuario selecciona un archivo, el evento change se dispara en el elemento de entrada de archivo y comenzamos a leer el contenido del archivo seleccionado utilizando FileReader. Finalmente, mostramos el contenido del archivo en la consola del navegador.