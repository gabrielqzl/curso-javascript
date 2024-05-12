let inputElement = document.getElementById("myInput")

// agregar eventos de teclado al elemento de entrada
inputElement.addEventListener('keydown', function(event){
    console.log('Tecla presionada: ', event.key)
})

inputElement.addEventListener('keyup', function(event){
    console.log('Tecla liberada', event.key)
})

inputElement.addEventListener('keypress', function(event){
    console.log('Tecla mantenida presionada', event.key)
})