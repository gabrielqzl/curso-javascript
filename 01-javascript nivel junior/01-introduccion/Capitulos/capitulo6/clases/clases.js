const titulo = document.querySelector(".titulo")

// titulo.classList.add("grande")
// titulo.classList.remove("grande")
// let valor = titulo.classList.item(1)

let nombreDeClase = "grande"
let valor = titulo.classList.contains(nombreDeClase)

// if(valor){
//     document.write(`la clase ${nombreDeClase} existe`)
//     titulo.classList.remove(nombreDeClase)
// } else {
//     document.write(`la clase ${nombreDeClase} no existe`)
//     titulo.classList.add(nombreDeClase)
// }

// titulo.classList.toggle("grande", false)
titulo.classList.replace("grande", "chico")

document.write(valor)