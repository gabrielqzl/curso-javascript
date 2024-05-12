// Función para comprobar el día seleccionado
function checkDay() {
    // Obtener el valor seleccionado del select
    let daySelect = document.getElementById('daySelect');
    let selectedValue = parseInt(daySelect.value);

    // Evaluar el valor seleccionado utilizando switch
    switch (selectedValue) {
        case 1:
            alert('Hoy es Lunes');
            break;
        case 2:
            alert('Hoy es Martes');
            break;
        case 3:
            alert('Hoy es Miércoles');
            break;
        case 4:
            alert('Hoy es Jueves');
            break;
        case 5:
            alert('Hoy es Viernes');
            break;
        case 6:
            alert('Hoy es Sábado');
            break;
        case 7:
            alert('Hoy es Domingo');
            break;
        default:
            alert('Valor no válido');
    }
}
