// Configurar las opciones
const options = {
    root: null, // Utilizar el viewport como área de intersección
    rootMargin: '0px', // No agregar margen adicional alrededor del viewport
    threshold: 0 // Usar un umbral de 0 para cargar las imágenes tan pronto como entren en el viewport
};

// Crear una instancia ed IntersectionObserver
const observer = new IntersectionObserver(callback, options);

// Definir la función de devolución de llamada
function callback(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Cargar la imagen cuando entre en el viewport
            const image = entry.target;
            const src = image.getAttribute('data-src');
            image.setAttribute('src', src);
            observer.unobserve(image);
        }
    });
}


// Observar todas las imágenes con el atributo 'data-src'
const lazyImages = document.querySelectorAll('img[data-src]');
lazyImages.forEach(image => observer.observe(image));

// En este ejemplo, las imágenes tienen el atributo data-src en lugar del atributo src. Las imágenes se cargan solo cuando se vuelven visibles en el viewport del navegador, utilizando Intersection Observer para detectar cuándo entran en la pantalla. Esto reduce la carga inicial de la página y mejora la experiencia del usuario