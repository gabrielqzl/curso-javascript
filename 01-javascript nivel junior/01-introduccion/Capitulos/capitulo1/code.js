"use strict"

// function saludar() {
//     return 'hola'
// }
// saludar()

// function sumar(num1, num2){
//     let res = num1+num2
//     document.write(res,"<br>")
//     return res
// }

// sumar(12,22)


// function saludar(nombre) {
//     return document.write(frase)
// }

// const saludar = function saludar(nombre) {
//     document.write(frase)
// }


let frase = `Hola ${nombre}`;
const saludar = nombre => document.write(frase)


saludar("pedro")
