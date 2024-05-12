## Callbacks en JavaScript

Los callbacks son funciones que se pasan como argumentos a otras funciones y se ejecutan después de que se complete una tarea asincrónica o después de un evento específico. Los callbacks son una forma común de manejar operaciones asincrónicas en JavaScript.

```
function doSomething(callback) {
  // Realizar alguna tarea
  // Llamar al callback después de completar la tarea
  callback();
}

// Ejemplo de uso de un callback
function myCallback() {
  console.log('El callback se ejecutó');
}

doSomething(myCallback); // Pasando el callback como argumento

```
En este ejemplo, doSomething es una función que toma un callback como argumento y lo ejecuta después de completar alguna tarea.