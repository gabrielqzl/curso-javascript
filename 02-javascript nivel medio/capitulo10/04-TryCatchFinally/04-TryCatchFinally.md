### Try, Catch y Finally en JavaScript

try, catch y finally son bloques utilizados en JavaScript para manejar excepciones.

- try: Este bloque permite probar un bloque de código en busca de errores.
- catch: Este bloque permite manejar cualquier excepción generada en el bloque try.
- finally: Este bloque permite ejecutar código, independientemente de si se produce una     excepción o no.

La estructura general es la siguiente:

``` 
try {
  // Bloque de código que puede generar una excepción
} catch (error) {
  // Bloque de código para manejar la excepción
} finally {
  // Bloque de código opcional que se ejecuta siempre, haya excepción o no
}

```
El bloque catch solo se ejecuta si se produce una excepción dentro del bloque try. El bloque finally se ejecuta siempre, ya sea que se produzca una excepción o no.


