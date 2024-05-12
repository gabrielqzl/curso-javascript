// Crear una instancia del objeto Date para representar la fecha y hora actual
const fechaActual = new Date()

// Obtener la fecha y hora actual y mostrar en la consola
console.log("Fecha y hora actual:", fechaActual)

// Crear una cadena de texto con la fecha y hora actual
const fechaActualtexto = `
    Fecha y hora actual: 
    año: ${fechaActual.getFullYear()}
    mes: ${fechaActual.getMonth()+1}
    día: ${fechaActual.getDate()}
    hora: ${fechaActual.getHours()}
    minuto: ${fechaActual.getMinutes()}
    segundos: ${fechaActual.getSeconds()}
`;

// Mostrar la fecha y hora actual en el body de la página
document.getElementById("fecha-actual").textContent = fechaActualtexto

// Este código crea una página HTML simple que muestra la fecha y hora actual en la consola del navegador y en el cuerpo de la página. La fecha y hora se obtienen utilizando el objeto Date. El resultado se muestra en formato de cadena de texto en el cuerpo de la página dentro de un elemento <div> con el id fecha-actual. Además, se muestra la fecha y hora actual en la consola del navegador.