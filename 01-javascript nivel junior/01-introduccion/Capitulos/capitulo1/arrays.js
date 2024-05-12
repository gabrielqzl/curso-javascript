"use strict"

// let frutas = ["guineo", "fresa", "mango", 5 ,9, "pedro"]
// document.write(frutas[4])

let pc = {
    nombre: "PC",
    procesador: "Intel Core I5",
    ram: "16GB",
    espacio: "1TB"
}

let nombre = pc["nombre"]
let procesador = pc["procesador"]
let ram = pc["ram"]
let espacio = pc["espacio"]

let frase = `
         el nombre de mi pc es: <b>${nombre}</b> <br>
         el procesador es: <b>${procesador}</b>    <br>
         la memoria ram es: <b>${ram}</b> <br>
         el espacio en disco es de <b> ${espacio}</b>
`
document.write(frase)