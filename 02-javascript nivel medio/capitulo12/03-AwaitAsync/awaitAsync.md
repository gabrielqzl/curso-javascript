## Async y Await en JavaScript

async y await son características introducidas en ECMAScript 2017 (también conocido como ES8) que permiten trabajar de manera más sencilla con promesas.

- async: La palabra clave async se utiliza para declarar una función asíncrona. Las funciones  async siempre devuelven una promesa.
- await: La palabra clave await se utiliza para esperar la resolución de una promesa dentro de una función async. await pausa la ejecución de la función async hasta que la promesa se resuelve o se rechaza.

```

// Función asíncrona que devuelve una promesa
async function myAsyncFunction() {
  // Esperar la resolución de una promesa
  const resultado = await miPromesa;
  return resultado;
}

// Llamar a la función asíncrona
myAsyncFunction()
  .then(function(resultado) {
    console.log(resultado);
  })
  .catch(function(error) {
    console.error(error);
  });

```

En este ejemplo, myAsyncFunction es una función async que utiliza await para esperar la resolución de una promesa antes de continuar la ejecución.

