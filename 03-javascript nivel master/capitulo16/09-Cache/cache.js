const imageUrls = [
    'https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,fit=contain,width=1200,height=675,quality=85/catalog/crunchyroll/a249096c7812deb8c3c2c907173f3774.jpe',
    'https://sm.ign.com/t/ign_es/lists/h/how-to-wat/how-to-watch-one-piece-in-order-including-movies_5eq8.1280.jpg',
    'https://i.blogs.es/069689/f2imtw9xwayuh03/1200_800.webp'
];

// Función para cargar imágenes desde la caché
function loadImages() {
    const imageContainer = document.getElementById('imageContainer');

    // Iterar sobre la lista de URLs de imágenes
    imageUrls.forEach(url => {
        // Crear un nuevo elemnto <img>
        const img = document.createElement('img');
        // Asignar la URL de la imagen al atriburo src
        img.src = url;
        // Agregar la imagen al contenedor
        imageContainer.appendChild(img);
    });
}

loadImages();

// En este ejemplo, hemos creado una página HTML simple que contiene un contenedor <div> con el id imageContainer. Utilizamos JavaScript para crear elementos <img> dinámicamente y cargar imágenes dentro del contenedor.

// Para que este ejemplo funcione correctamente, asegúrate de tener imágenes llamadas image1.jpg, image2.jpg y image3.jpg en el mismo directorio que tu archivo HTML. Estas imágenes se cargarán en la caché del navegador cuando la página se abra por primera vez, y en las visitas posteriores, se cargarán desde la caché en lugar de volver a descargarlas del servidor, lo que mejorará el rendimiento de la página.