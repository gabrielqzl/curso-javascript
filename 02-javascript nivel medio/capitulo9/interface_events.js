// obtener el elemento de entrada
let inputElement = document.getElementById('myInput')

// agregar eventos de interfaz al elemento de entrada
inputElement.addEventListener('focus', function(){
    console.log('Input enfocado')
})

inputElement.addEventListener('blur', function(){
    console.log('Input desenfocado')
})

inputElement.addEventListener('change', function(){
    console.log('Valor del input cambiado')
})

inputElement.addEventListener('input', function(){
    console.log('Valor del input cambiado')
})


let imageElement = document.getElementById('myImage')

// Agregar eventos de interfaz adicionales a la imagen
imageElement.addEventListener('abort', function(){
    console.log('La carga de la imagen fue abortada')
})

imageElement.addEventListener('error', function(){
    console.log('Error al cargar la imagen')
})

imageElement.addEventListener('load', function(){
    console.log('La imagen se a cargado correctamente')
})

imageElement.addEventListener('beforeunload', function(){
    console.log('el documento está a punto de descargarse')
})

imageElement.addEventListener('unload', function(){
    console.log('La página ha sido descargada')
})



