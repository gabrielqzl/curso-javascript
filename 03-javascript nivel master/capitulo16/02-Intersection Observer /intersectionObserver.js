// Configurar las opciones
const options = {
    root: null, // Utiliza el viewport como área de intersección
    rootMargin: '0px', // No agregar margen adicional alrededor del viewport
    threshold: 0.5 // Umbral de intersección (50% del elemento visible)
};

// Creaar una instancia de IntersectionObserver
const observer = new IntersectionObserver(callback, options);

// Definir la función de devolución de llamada
function callback(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Agregar una clase cuando el elemento es visible
            entry.target.classList.add('visible');
        } else {
            // Quitar la clase cuando el elemento ya no es visible
            entry.target.classList.remove('visible');
        }
    });
}



// Observar el elemento con la clase 'target'
const targetElement = document.querySelector('.target');
observer.observe(targetElement);

// Este ejemplo observa el elemento <div> con la clase "target". Cuando este elemento se vuelve visible en el viewport, se le agrega la clase "visible", lo que cambia su opacidad y lo hace más visible.