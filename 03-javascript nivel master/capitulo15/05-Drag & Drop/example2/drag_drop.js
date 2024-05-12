"user strict"

const circulo = document.querySelector(".circulo")
const rectangulo = document.querySelector(".rectangulo")


circulo.addEventListener("dragstart",(e) => {
    e.dataTransfer.setData("clase", e.target.className)
})
// circulo.addEventListener("drag", () => console.log("drag"))
// circulo.addEventListener("dragend", () => console.log("dragend"))

rectangulo.addEventListener("dragenter", () => console.log("dragenter 1"))
rectangulo.addEventListener("dragover", (e) => {
    e.preventDefault()
    console.log("dragover 2")
})
rectangulo.addEventListener("drop", (e) => {
    console.log(e.dataTransfer.getData("clase"))
})
rectangulo.addEventListener("dragleave", () => console.log("dragleave 4"))