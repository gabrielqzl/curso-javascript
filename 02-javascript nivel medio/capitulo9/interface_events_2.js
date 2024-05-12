// obtener elementos
let resizeMessage = document.getElementById('resizeMessage')
let scrollMessage = document.getElementById('scrollMessage')
let inputElement = document.getElementById('input')


// Evento de resize
window.addEventListener('resize', () => {
    resizeMessage.textContent = 'El tamaño de la ventana ha cambiado'
})

// Evento de scroll
window.addEventListener('scroll', () =>{
    scrollMessage.textContent = 'Haz desplazado la página'
})

// Evento de select
inputElement.addEventListener('select', () => {
    alert('Texto seleccionado')
})
