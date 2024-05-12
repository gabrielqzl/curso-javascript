# Web Workers

Los Web Workers son una característica de HTML5 que permite ejecutar scripts en segundo plano en un hilo separado del hilo principal de JavaScript en una aplicación web. Esto permite realizar tareas complejas sin bloquear la interfaz de usuario (UI) y mejorar la capacidad de respuesta de la aplicación.

### Características clave:
1. Ejecución en segundo plano: Los Web Workers permiten ejecutar scripts en segundo plano sin afectar la interfaz de usuario principal.
2. Hilos separados: Los Web Workers se ejecutan en hilos separados del hilo principal de JavaScript, lo que permite realizar operaciones intensivas sin bloquear la UI.
3. Comunicación con el hilo principal: Los Web Workers pueden comunicarse con el hilo principal mediante mensajes, lo que permite intercambiar datos y coordinar tareas de manera eficiente.

### Tipos de Web Workers:
1. Dedicados: Los Web Workers dedicados se ejecutan en un único hilo separado del hilo principal y están asociados con un único script.
2. Compartidos (Shared Workers): Los Shared Workers pueden ser accedidos por múltiples scripts en diferentes ventanas, pestañas o iframes dentro de la misma aplicación web.
3. Implementación:

Aquí tienes un ejemplo básico de cómo crear y utilizar un Web Worker dedicado:

main.js:
```
// Crear un nuevo Web Worker
const worker = new Worker('worker.js');

// Enviar un mensaje al Web Worker
worker.postMessage('Hello from main thread!');

// Manejar mensajes recibidos del Web Worker
worker.onmessage = function(event) {
  console.log('Message from worker:', event.data);
};
```
worker.js:
```
// Manejar mensajes recibidos del hilo principal
self.onmessage = function(event) {
  console.log('Message from main thread:', event.data);
  
  // Enviar un mensaje de vuelta al hilo principal
  self.postMessage('Hello from Web Worker!');
};
```
En este ejemplo, main.js crea un nuevo Web Worker (worker.js) y envía un mensaje a él. El Web Worker recibe el mensaje, realiza alguna operación y envía un mensaje de vuelta al hilo principal. Ambos scripts pueden intercambiar mensajes de esta manera.