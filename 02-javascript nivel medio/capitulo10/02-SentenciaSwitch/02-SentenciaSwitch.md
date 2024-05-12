## Sentencia Switch en JavaScript
La sentencia switch en JavaScript es una forma de tomar decisiones basadas en el valor de una expresión. Se utiliza cuando se tienen múltiples casos posibles y se desea ejecutar diferentes bloques de código según el valor de la expresión.

La estructura general de la sentencia switch es la siguiente:

```
    switch (expresion) {
    case valor1:
        // Bloque de código para el caso valor1
        break;
    case valor2:
        // Bloque de código para el caso valor2
        break;
    // Más casos...
    default:
        // Bloque de código por defecto
    }

```

La expresión se evalúa una vez y se compara su valor con los valores de los casos. Si hay una coincidencia, se ejecuta el bloque de código correspondiente. Si no hay coincidencias y se proporciona un caso default, se ejecuta el bloque de código del caso default.