### Excepciones en JavaScript

Las excepciones en JavaScript son errores que ocurren durante la ejecución de un programa y pueden interrumpir su flujo normal. Estas excepciones pueden ser causadas por diversas razones, como errores de sintaxis, operaciones no válidas o problemas de lógica en el código.

Para manejar excepciones en JavaScript, puedes utilizar bloques try, catch y opcionalmente finally. La estructura general es la siguiente:

```
try {
// Bloque de código que puede generar una excepción
} catch (error) {
// Bloque de código para manejar la excepción
} finally {
// Bloque de código opcional que se ejecuta siempre, haya excepción o no
}
Dentro del bloque try, colocas el código que puede lanzar una excepción. Si se produce una excepción, el bloque catch captura el error y ejecuta el código para manejar la excepción. El bloque finally es opcional y se ejecuta siempre, haya excepción o no.

```
