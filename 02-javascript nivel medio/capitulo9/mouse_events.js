// obtener el elemento div
let divElement = document.getElementById("myDiv")

// agregar eventos del mouse al elemento div
divElement.addEventListener('mouseover', function () {
    divElement.style.backgroundColor = 'lightgreen'
    divElement.textContent = 'Mouse sobre mí'
})

divElement.addEventListener('mouseout', function () {
    divElement.style.backgroundColor = 'lightblue'
    divElement.textContent = 'Pasa el mouse sobre mi'
})

divElement.addEventListener('click', function () {
    alert('Haz hecho click en el div!')
})

divElement.addEventListener('mousedown', function () {
    divElement.style.backgroundColor = 'yellow'
})

divElement.addEventListener('mouseup', function () {
    divElement.style.backgroundColor = 'lightblue'
})

