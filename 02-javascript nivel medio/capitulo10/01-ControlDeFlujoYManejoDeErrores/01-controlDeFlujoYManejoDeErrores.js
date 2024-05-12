// Función para comprobar edad
function checkAge() {
    var age = parseInt(document.getElementById('ageInput').value);
    if (isNaN(age)) {
        alert('Por favor, ingresa una edad válida');
        return;
    }

    if (age >= 18) {
        alert('Eres mayor de edad');
    } else {
        alert('Eres menor de edad');
    }
}

// Función para dividir números
function divideNumbers() {
    var number1 = parseInt(document.getElementById('number1Input').value);
    var number2 = parseInt(document.getElementById('number2Input').value);

    if (isNaN(number1) || isNaN(number2)) {
        alert('Por favor, ingresa números válidos');
        return;
    }

    try {
        var resultado = number1 / number2;
        alert('El resultado de la división es: ' + resultado);
    } catch (error) {
        alert('Se produjo un error: ' + error.message);
    }
}

// Evento click para comprobar edad
document.getElementById('checkAgeBtn').addEventListener('click', checkAge);

// Evento click para dividir números
document.getElementById('divideNumbersBtn').addEventListener('click', divideNumbers);
