// Manejar clic en el botón para hacer una solicitud con Axios
// document.getElementById('btn').addEventListener('click', function() {
//     // Realizar una solicitud GET
//     axios.get('https://jsonplaceholder.typicode.com/posts/1')
//         .then(function(response) {
//             console.log('Respuesta con Axios:', response.data);
//             alert('Respuesta con Axios:\n' + JSON.stringify(response.data, null, 2));
//         })
//         .catch(function(error) {
//             console.error('Error al hacer la solicitud con Axios:', error);
//             alert('Error al hacer la solicitud con Axios:\n' + error.message);
//         });
// });



// Función asincrónica para hacer una solicitud con Axios utilizando async/await
async function fetchData() {
    try {
        // Realizar una solicitud GET con await
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        console.log('Respuesta con Axios:', response.data);
        alert('Respuesta con Axios:\n' + JSON.stringify(response.data, null, 2));
    } catch (error) {
        console.error('Error al hacer la solicitud con Axios:', error);
        alert('Error al hacer la solicitud con Axios:\n' + error.message);
    }
}

// Manejar clic en el botón para llamar a la función fetchData
document.getElementById('btn').addEventListener('click', fetchData);
