# Operador Ternario en JavaScript

El operador ternario es una forma concisa de escribir expresiones condicionales en JavaScript. Se compone de tres partes: una expresión booleana seguida por un signo de interrogación ?, una expresión que se evalúa si la condición es verdadera, y otra expresión que se evalúa si la condición es falsa.

### Sintaxis
La sintaxis básica del operador ternario es la siguiente:

```
condicion ? expresion_verdadera : expresion_falsa;
```
- condicion: La expresión booleana que se evalúa.
- expresion_verdadera: La expresión que se ejecuta si la condición es verdadera.
- expresion_falsa: La expresión que se ejecuta si la condición es falsa.

### Características
 1. Sintaxis concisa: El operador ternario proporciona una manera concisa de escribir expresiones condicionales en una sola línea de código.
2. Versatilidad: Se puede utilizar en cualquier contexto donde se necesite una evaluación condicional, como asignaciones de variables, expresiones de retorno de funciones, y más.
3. Legibilidad: Aunque puede mejorar la legibilidad en algunos casos, un uso excesivo puede hacer que el código sea menos claro, especialmente si las expresiones son complicadas.

### Ejemplo de Uso
```
// Ejemplo de operador ternario para determinar si un número es par o impar
const numero = 10;
const mensaje = numero % 2 === 0 ? 'Es par' : 'Es impar';

console.log(mensaje); // Salida: Es par

```
En este ejemplo, se utiliza el operador ternario para determinar si el número numero es par o impar. La condición numero % 2 === 0 verifica si el número es divisible por 2 sin dejar residuo, lo que indica que es par. Si la condición es verdadera, se asigna el mensaje 'Es par', de lo contrario se asigna 'Es impar'. Finalmente, se muestra el mensaje en la consola.