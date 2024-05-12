# Modo Estricto (Strict Mode)

El Modo Estricto es una característica de JavaScript que te permite optar por una versión más restringida y segura del lenguaje. Al activar el Modo Estricto, se aplican ciertas restricciones y se realizan cambios en el comportamiento del código para ayudar a evitar errores comunes y hacer el código más seguro y legible.

### Características del Modo Estricto

- Detección de errores: El Modo Estricto detecta y arroja más errores que el modo no estricto. Por ejemplo, el Modo Estricto arroja un error al intentar asignar un valor a una variable no declarada.
- Eliminación de comportamientos confusos: Algunos comportamientos ambiguos o problemáticos de JavaScript se eliminan en el Modo Estricto. Por ejemplo, en el Modo - Estricto, no puedes utilizar with o eval de manera laxa.
- Optimización del rendimiento: En algunos casos, el Modo Estricto permite a los motores de JavaScript realizar optimizaciones de rendimiento que no serían posibles en el modo no estricto.
- Seguridad mejorada: Al eliminar comportamientos confusos y detectar errores más temprano, el Modo Estricto ayuda a hacer que el código JavaScript sea más seguro y menos propenso a errores.

### Activación del Modo Estricto

El Modo Estricto se activa colocando la directiva "use strict"; al principio de un script o de una función. Cuando se coloca en la parte superior de un script, se aplica a todo el script. Cuando se coloca dentro de una función, se aplica solo a esa función y a su cuerpo.

```
// Modo Estricto a nivel de script
"use strict";
// Código en Modo Estricto aquí

// Modo Estricto a nivel de función
function miFuncion() {
    "use strict";
    // Código en Modo Estricto aquí
}
```

### Ejemplo de Uso del Modo Estricto
 ```
 "use strict";

// Ejemplo de código que arroja un error en Modo Estricto
x = 10; // Error: x is not defined
delete Object.prototype; // Error: Cannot delete property 'prototype' of function Object()
with ({}) {} // Error: Strict mode code may not include a with statement

// Ejemplo de código que cambia de comportamiento en Modo Estricto
function mostrarValor() {
    return this;
}

console.log(mostrarValor()); // En Modo No Estricto: Window object, En Modo Estricto: undefined

 ```

 En este ejemplo, se activa el Modo Estricto con la directiva "use strict";. Luego, se muestran algunos ejemplos de código que arrojan errores o cambian de comportamiento cuando se ejecutan en Modo Estricto. Esto demuestra cómo el Modo Estricto puede ayudar a detectar errores y evitar comportamientos confusos en el código JavaScript.