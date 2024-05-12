# Closures en JavaScript
Los closures son una característica poderosa en JavaScript que permite a las funciones acceder y recordar el ámbito léxico en el que fueron creadas, incluso después de que la función haya sido ejecutada. Los closures son útiles para crear funciones que mantienen acceso a variables externas incluso después de que la función ha terminado su ejecución.

## Definición
Un closure en JavaScript es una función interna que tiene acceso a las variables de su función contenedora, incluso después de que la función contenedora haya finalizado su ejecución. El closure tiene acceso a las variables de su ámbito léxico en el momento de su creación.

## Características
- Acceso a variables externas: Los closures pueden acceder a variables definidas en su ámbito léxico, incluso después de que la función contenedora haya terminado su ejecución.
- Preservación del ámbito léxico: Los closures mantienen una "referencia" al ámbito léxico en el que fueron creados, lo que les permite acceder a las variables externas incluso después de que la función contenedora haya finalizado su ejecución.
- Persistencia de variables: Los closures pueden mantener vivas las variables que de otro modo serían eliminadas por el recolector de basura, siempre que el closure siga existiendo.

### Ejemplo de Closures

```
function contador() {
  let contador = 0;

  function incrementar() {
    contador++;
    console.log(contador);
  }

  return incrementar;
}

// Crear una instancia del closure contador
const incrementarContador = contador();

// Llamar a la función incrementar() múltiples veces
incrementarContador(); // Salida: 1
incrementarContador(); // Salida: 2
incrementarContador(); // Salida: 3
```
En este ejemplo, la función contador() define una variable contador y una función interna incrementar(), que tiene acceso al ámbito léxico de contador. Cuando contador() se ejecuta, devuelve la función incrementar(), que conserva una referencia al ámbito léxico de contador. Cada vez que se llama a incrementarContador(), la variable contador se incrementa y se muestra en la consola.