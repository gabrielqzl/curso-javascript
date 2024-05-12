// Obtener el elemento de entrada de archivo
let fileInput = document.getElementById('fileInput')

// Obtener el elemento para mostrar el contenido del archivo
let fileContentDiv = document.getElementById('fileContent');

// Escuchar el evento 'change' en el elemento de entrada de archivo
fileInput.addEventListener('change', function (event) {
    // obtener el archivo seleccionado
    let file = event.target.files[0];

    // Crear una nueva instancia de FileReader
    let reader = new FileReader();

    // Configurar la función de devolución de llamada para cuando se complete la lectura del archivo
    reader.onload = function (event) {
        // Mostrar el contenido del archivo en la consola
        fileContentDiv.textContent = event.target.result;
    }
    reader.readAsText(file);
});