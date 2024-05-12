
// button.addEventListener('click',  saludar);

// function saludar(a){
//     alert("hola")
//     button.removeEventListener("click", saludar)
// }

const button = document.querySelector(".button")
const contenedor1 = document.querySelector(".contenedor-1")
const contenedor2 = document.querySelector(".contenedor-2")

contenedor1.addEventListener("click", (e) => {
    alert("di click en el contenedor rojo")
})
contenedor2.addEventListener("click", (e) => {
    alert("di click en el contenedor azul")
})

button.addEventListener("click", (e) => {
    alert("di click en el botón")
    e.stopPropagation()
})