// Definir la función revusriva para calcular el factorial
function factoria(n){
    // Caso base: Si n es 0 o 1, el factorial es 1
    if(n===0 || n ===1){
        return 1
    }  else {
        // Llamada recursiva: Factorial de n es n * factorial(n-1)
        return n * factoria(n - 1)
    }
}

// Definir una función para calcular el factorial y mostrar el resultado en la consola
function calcularFactorial(){
    const numero = parseInt(prompt("Ingrese un número para calcular su facorial:"))

    // Verificar si el usuario ingresó un número válido
    if(!isNaN(numero)) {
        // Calcular el factorial del número ingresado
        const resultado = factoria(numero)
        console.log(`El factorial de ${numero} es: ${resultado}`)
    } else {
        console.error("Ingrese un número válido")
    }
}

// En este ejemplo, el archivo HTML contiene un botón que llama a la función calcularFactorial() cuando se hace clic en él. Esta función solicita al usuario que ingrese un número y luego calcula el factorial de ese número utilizando la función factorial() definida en el archivo JavaScript. El resultado se muestra en la consola del navegador.