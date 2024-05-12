// Función para el ejemeplo setTimeOut()

function startTimeout() {
    setTimeout(function () {
        alert('Han pasado 3 segundos')
    }, 3000)
}

// Ejemplo de setInterval()
let intervalId
let time = 0
function startInterval() {
    intervalId = setInterval(function () {
        time += 1
        console.log(`¡Han pasado ${time} segundo!`)
    }, 1000)
}

function stopInterval() {
    clearInterval(intervalId)
    time = 0
    console.log('Intervalo detenido')
}