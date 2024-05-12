# Memoization

La **memoización** es una técnica de optimización que consiste en almacenar el resultado de una función para evitar recalcularlo en futuras llamadas con los mismos argumentos. Esto puede mejorar significativamente el rendimiento de la aplicación, especialmente en funciones costosas computacionalmente. La idea básica es utilizar una caché para almacenar los resultados de las llamadas anteriores y devolver el resultado almacenado si la misma llamada se realiza nuevamente.

### Teoría:
La **memoización** se puede implementar de varias formas en JavaScript. Una forma común es utilizando una función de orden superior que envuelve la función original y gestiona la caché. Aquí hay un ejemplo de cómo se puede implementar la memoización utilizando esta técnica:

```
function memoize(func) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (!cache.has(key)) {
      cache.set(key, func(...args));
    }
    return cache.get(key);
  };
}

// Ejemplo de uso:
function expensiveOperation(n) {
  console.log('Calculating for', n);
  return n * 2;
}

const memoizedExpensiveOperation = memoize(expensiveOperation);

console.log(memoizedExpensiveOperation(5)); // Calculating for 5
console.log(memoizedExpensiveOperation(5)); // No se vuelve a calcular
console.log(memoizedExpensiveOperation(10)); // Calculating for 10
console.log(memoizedExpensiveOperation(10)); // No se vuelve a calcular
```
