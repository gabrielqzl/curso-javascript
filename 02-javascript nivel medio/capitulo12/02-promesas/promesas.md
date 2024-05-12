## Promesas en JavaScript

Las promesas son objetos que representan la eventual finalización o el fracaso de una operación asincrónica. Son una forma más moderna y poderosa de manejar operaciones asincrónicas en JavaScript en comparación con los callbacks.

```
// Crear una promesa
var miPromesa = new Promise(function(resolve, reject) {
  // Simular una operación asincrónica exitosa
  setTimeout(function() {
    resolve('Éxito'); // Resuelve la promesa
  }, 2000);
});

// Usar la promesa
miPromesa.then(function(resultado) {
  console.log('La promesa se resolvió con:', resultado);
}).catch(function(error) {
  console.error('La promesa se rechazó con:', error);
});
```
En este ejemplo, miPromesa representa una operación asincrónica que se resolverá después de 2 segundos. Luego, usamos el método then para manejar el caso de éxito de la promesa y el método catch para manejar el caso de error.