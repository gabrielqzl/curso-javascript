// Función para dividir números
function divideNumbers() {
    try {
        // Se genera un error intencionalmente dividiendo un número por cero
        var resultado = 10 / 0;
        alert('El resultado de la división es: ' + resultado);
    } catch (error) {
        alert('Se produjo un error: ' + error.message);
    } finally {
        alert('¡La operación ha finalizado!');
    }
}
