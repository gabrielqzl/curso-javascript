// Definir una función que acepta un número variable de argumentos y los suma

function sumar(...numeros){
    return numeros.reduce((total, numero) => total + numero, 0)
}

// Llamar a la función con diferentes números de argumentos
console.log(sumar(1,2,3))
console.log(sumar(1,2,3,4,5))
console.log(sumar(10))
console.log(sumar())

// En este ejemplo, el archivo HTML proporciona la estructura básica de la página web e incluye el archivo JavaScript parametro_rest.js. El archivo JavaScript define una función sumar() que acepta un número variable de argumentos utilizando el parámetro rest ...numeros. Luego, la función suma todos los números pasados como argumentos y muestra el resultado en la consola del navegador.

// En este ejemplo, el método reduce() se utiliza para sumar todos los números del array numeros. La función callback recibe dos parámetros: el acumulador y el número actual del array. En cada iteración, la función callback suma el número actual al acumulador. El valor inicial del acumulador se establece en 0. Al finalizar la reducción, reduce() devuelve el valor final del acumulador, que es la suma de todos los números del array.