// const titulo = document.querySelector(".titulo")

// let resultado = titulo.textContent
// let resultado = titulo.innerText

// let resultado1 = titulo.outerText
// let resultado2 = titulo.innerHTML
// let resultado3 = titulo.outerHTML


// document.write(resultado1)
// document.write(resultado2)
// document.write(resultado3)

const contenedor = document.querySelector(".contenedor")
// const item = document.createElement("LI")
// const textDelItem = document.createTextNode("Este es un item de la lista")
// item.appendChild(textDelItem)
// item.innerHTML = "Este es un item del la lista"
// contenedor.appendChild(item)

const fragmento = document.createDocumentFragment()

for (let i = 0; i < 10; i++) {
    const item = document.createElement("LI")
    item.innerHTML = "Este es un item del la lista"
    fragmento.appendChild(item)
}
contenedor.appendChild(fragmento)
console.log(fragmento)