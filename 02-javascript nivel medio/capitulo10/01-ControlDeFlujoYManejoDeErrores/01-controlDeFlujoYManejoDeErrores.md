### Control de Flujo y Manejo de Errores en JavaScript

El control de flujo y el manejo de errores son conceptos fundamentales en JavaScript que te permiten controlar el flujo de ejecución de tu código y manejar situaciones inesperadas que puedan surgir durante la ejecución del programa.

### Control de Flujo
El control de flujo en JavaScript se logra mediante estructuras de control como if, else, else if, switch, for, while, y do-while. Estas estructuras te permiten tomar decisiones y repetir bloques de código según ciertas condiciones.

``` 
    // Ejemplo de control de flujo con if-else
    var edad = 18;

    if (edad >= 18) {
        console.log('Eres mayor de edad');
    } else {
        console.log('Eres menor de edad');
    }
```



### Manejo de Errores
El manejo de errores en JavaScript se realiza utilizando bloques try, catch, y opcionalmente finally. Esto te permite controlar y manejar errores que puedan surgir durante la ejecución del código, evitando que el programa se detenga inesperadamente.


```
    // Ejemplo de manejo de errores con try-catch
    try {
        // Código que puede generar un error
        var resultado = 10 / 0;
        console.log(resultado);
    } catch (error) {
        // Manejo del error
        console.error('Se produjo un error:', error.message);
    } finally {
        // Bloque opcional que se ejecuta siempre, haya error o no
        console.log('Este bloque se ejecuta siempre');
    }

```