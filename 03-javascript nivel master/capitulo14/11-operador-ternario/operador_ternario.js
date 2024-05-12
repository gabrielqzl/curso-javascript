// Función para verificar si un número es par o impar y mostrar el resultado en la consola y en el HTML
function verificarNumero(){
    const numero = 10
    const mensaje = numero % 2 === 0 ? 'Es par' : 'Es impar'
    
    // Mostrar el resultado en la consola
    console.log(mensaje)    
    
    // Mostrar el resultado en el HTML
    const resultadoHTML = document.createElement('p')
    resultadoHTML.textContent = mensaje
    document.body.appendChild(resultadoHTML)
}
