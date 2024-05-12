// Función que devuelve una promesa
function doSomethingAsync() {
    return new Promise(function(resolve, reject) {
        // Simular una operación asincrónica exitosa
        setTimeout(function() {
            resolve('Éxito'); // Resuelve la promesa
        }, 2000);
    });
}

// Función asíncrona que utiliza async y await
async function myAsyncFunction() {
    try {
        console.log('Iniciando tarea asincrónica...');
        // Esperar la resolución de la promesa
        const resultado = await doSomethingAsync();
        console.log('La promesa se resolvió con:', resultado);
    } catch (error) {
        console.error('La promesa se rechazó con:', error);
    }
}

// Evento click para iniciar la operación asincrónica
document.getElementById('btn').addEventListener('click', myAsyncFunction);
