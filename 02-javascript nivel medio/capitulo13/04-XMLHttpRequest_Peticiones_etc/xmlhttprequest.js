// Manejar clic en el botón para hacer una solicitud con XMLHttpRequest
document.getElementById('btn').addEventListener('click', function() {
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);
    xhttp.onload = function() {
        if (xhttp.status >= 200 && xhttp.status < 300) {
            console.log('Respuesta con XMLHttpRequest:', xhttp.responseText);
        } else {
            console.error('Error al hacer la solicitud con XMLHttpRequest:', xhttp.statusText);
        }
    };
    xhttp.onerror = function() {
        console.error('Error de red al hacer la solicitud con XMLHttpRequest');
    };
    xhttp.send();
});
