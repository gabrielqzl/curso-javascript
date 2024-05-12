// Función para permitir el soltar
function allowDrop(event) {
    event.preventDefault();
    console.log('allowDrop - permitir el soltar')
}

// Función para manejar el inicio del arrastre
function dragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
    console.log('dragStart')
}

// Función para manejar el soltar
function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text/plain");
    event.target.appendChild(document.getElementById(data));
    console.log('drop')
}
