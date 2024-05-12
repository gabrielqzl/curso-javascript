// Metodos de Arrays
// Transformadores
// pop() - elimina el último elemento de un array y lo devuelve
// shift() - elimina el priemr elemento d eun array y lo devuelve
// push() - Agrega un elemento al array al final de la lista
// reverse() - invierte el orden de los elementos de una array
// unshift() - Agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array
// soft() - Ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado
// splice() - Cambia el contenido de un array eliminando elementos existentes y agregando nuevos elementos

// let nombres = ["pedro", "maría", "jorge", "luisa", "lucrecia", "alan", "lupe"]
// let resultado = nombres.pop()
// let orden = nombres.sort()
// document.write(nombres + "<br>")
// document.write(resultado + "<br>")
// document.write(orden + "<br>")

let numeros = ["abecedario", "manzana", "pedro", "dedo", "bobo"]
document.write(numeros + "<br>")
numeros.splice(1, 0, "ggg")
document.write(numeros + "<br>")

