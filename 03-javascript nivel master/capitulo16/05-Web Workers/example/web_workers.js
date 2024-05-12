let worker;

document.getElementById('startWorker').addEventListener('click', function() {
  // Verificar si el Web Worker ya está en ejecución
  if (!worker) {
    // Crear un nuevo Web Worker
    worker = new Worker('worker.js');

    // Manejar mensajes recibidos del Web Worker
    worker.onmessage = function(event) {
      console.log('Message received from Web Worker:', event.data);
      document.getElementById('result').textContent = `Result: ${event.data}`;
      worker = null; // Restablecer el Web Worker después de recibir el mensaje
    };
  } else {
    console.log('Worker already running.');
  }
});
