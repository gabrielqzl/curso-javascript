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

  // Mostrar resultado en la página HTML
  const outputElement = document.getElementById('output');
  outputElement.innerHTML += `<p>Result for 5: ${memoizedExpensiveOperation(5)}</p>`;
  outputElement.innerHTML += `<p>Result for 5: ${memoizedExpensiveOperation(5)}</p>`;
  outputElement.innerHTML += `<p>Result for 10: ${memoizedExpensiveOperation(10)}</p>`;
  outputElement.innerHTML += `<p>Result for 10: ${memoizedExpensiveOperation(10)}</p>`;

  // Con este código, cada vez que se llama a la función memoizada, se calculará el tiempo de ejecución y se mostrará junto al resultado. Esto nos permitirá comparar los tiempos de ejecución y ver el impacto de la memoización en el rendimiento.