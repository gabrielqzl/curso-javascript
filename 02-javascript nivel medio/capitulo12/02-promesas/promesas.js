// Función que devuelve una promesa
function doSomethingAsync() {
    return new Promise(function(resolve, reject) {
        // Simular una operación asincrónica exitosa
        setTimeout(function() {
            resolve('Éxito'); // Resuelve la promesa
        }, 2000);
    });
}

// Evento click para iniciar la operación asincrónica
document.getElementById('btn').addEventListener('click', function() {
    console.log('Iniciando tarea asincrónica...');
    // Llamar a la función que devuelve una promesa
    doSomethingAsync()
        .then(function(resultado) {
            console.log('La promesa se resolvió con:', resultado);
        })
        .catch(function(error) {
            console.error('La promesa se rechazó con:', error);
        });
});
