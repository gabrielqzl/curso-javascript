// Función que simula una operación asincrónica
function doSomethingAsync(callback) {
    setTimeout(function() {
        console.log('La tarea asincrónica se completó');
        // Llamar al callback después de completar la tarea asincrónica
        callback();
    }, 2000);
}

// Función callback
function myCallback() {
    console.log('El callback se ejecutó');
}

// Evento click para iniciar la operación asincrónica
document.getElementById('btn').addEventListener('click', function() {
    console.log('Iniciando tarea asincrónica...');
    doSomethingAsync(myCallback); // Pasando el callback como argumento
});
