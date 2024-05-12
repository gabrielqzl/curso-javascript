// Metodos de Arrays

// Accesores
//  - join() - une todos los elementos de una matriz (u objetos) en una cadena y la devuelve.
//  - slice() - devuelve una parte del array dentro de uno nuevo array empezando por inicio hasta el fin (fin no incluido)
//  - Metodos ya vistos en cadenas: toString(), indexOf(), lastIndexOf(), includes()


let numeros = ["abecedario", "manzana", "pedro", "dedo", "bobo"]
document.write(numeros[0] + "<br>")

// let resultado = numeros.join("<br>elemento: ")
// let resultado = numeros.slice(0, -1)
// let resultado = numeros.indexOf("pedro")
let resultado = numeros.lastIndexOf("bobo")

document.write("elemento: " + resultado)

