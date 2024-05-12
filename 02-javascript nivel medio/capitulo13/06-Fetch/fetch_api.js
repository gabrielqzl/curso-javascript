// Manejar clic en el botón para hacer una solicitud con Fetch API
document.getElementById('btn').addEventListener('click', function() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(function(response) {
            if (!response.ok) {
                throw new Error('La solicitud falló');
            }
            return response.json();
        })
        .then(function(data) {
            console.log('Respuesta con Fetch API:', data);
        })
        .catch(function(error) {
            console.error('Error al hacer la solicitud con Fetch API:', error.message);
        });
});
