"use strict"

let numero = 0
// while (numero < 10) {
//     numero++
//     document.write(`${numero}<br>`)
// }

// do {
//     document.write(`${numero}<br>`)
//     numero++
// } while (numero < 10) 

while (numero < 100) {
    numero++
    document.write(`${numero}<br>`)
    if (numero == 20) {
        break
    }
}

document.write("fin")