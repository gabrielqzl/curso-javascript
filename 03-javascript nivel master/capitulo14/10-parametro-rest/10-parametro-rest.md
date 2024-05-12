# Parámetro Rest en JavaScript
El parámetro rest es una característica introducida en ECMAScript 6 que permite a una función aceptar un número variable de argumentos como un array. Esto facilita la manipulación de un conjunto de argumentos en una función sin necesidad de especificar cada argumento individualmente.

### Definición
El parámetro rest se denota mediante tres puntos (...) seguidos del nombre del parámetro. Este parámetro recoge los argumentos restantes pasados a la función en un array.

### Características
Recoge argumentos restantes: El parámetro rest recoge todos los argumentos restantes pasados a una función después de los argumentos explícitos.
Representación como array: Los argumentos restantes se almacenan en un array, lo que permite trabajar con ellos de manera similar a cualquier otro array en JavaScript.
Puede estar al final: El parámetro rest puede estar presente como el último parámetro en la lista de parámetros de una función. Sin embargo, no puede haber otros parámetros después del parámetro rest.
### Ejemplo de Uso

```
// Definir una función que acepta un número variable de argumentos y los suma
function sumar(...numeros) {
  return numeros.reduce((total, numero) => total + numero, 0);
}

// Llamar a la función con diferentes números de argumentos
console.log(sumar(1, 2, 3)); // Salida: 6
console.log(sumar(1, 2, 3, 4, 5)); // Salida: 15
console.log(sumar(10)); // Salida: 10
console.log(sumar()); // Salida: 0
```
En este ejemplo, la función sumar() acepta un número variable de argumentos utilizando el parámetro rest ...numeros. Luego, utiliza el método reduce() para sumar todos los números pasados como argumentos. La función se puede llamar con cualquier número de argumentos, y el parámetro rest los recoge todos en un array para su procesamiento.