// Función para calcular el número Fibonacci
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  // Manejar mensajes recibidos del hilo principal
  self.onmessage = function(event) {
    console.log('Message received from main thread:', event.data);
    
    // Calcular Fibonacci(40) en segundo plano
    const result = fibonacci(40);
    
    console.log('Sending result to main thread:', result);
    
    // Enviar el resultado al hilo principal
    self.postMessage(result);
  };
  
// En este ejemplo, el archivo index.html carga un Web Worker desde el archivo worker.js. El Web Worker calcula el número Fibonacci de 40 en segundo plano y envía el resultado de vuelta al hilo principal. Una vez que el resultado es recibido, se actualiza la interfaz de usuario con el resultado.

// Para ejecutar este ejemplo, simplemente coloca los archivos index.html y worker.js en el mismo directorio y abre index.html en un navegador web. Verás cómo se muestra el resultado del cálculo de Fibonacci después de que el Web Worker termine de calcularlo en segundo plano.

