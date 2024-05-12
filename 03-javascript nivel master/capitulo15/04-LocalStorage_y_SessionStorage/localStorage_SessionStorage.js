// Almacenar idioma en localStorage
localStorage.setItem('idioma', 'es')

// Obtener idioma de localStorage
const idiomaLocalStorage = localStorage.getItem('idioma')
mostrarResultado('Idioma (localStorage): '+ idiomaLocalStorage)

// Almacenar idioma en sessionStorage
sessionStorage.setItem('idioma', 'en')

// Obtener idioma de sessionStorage
const idiomaSessionStorage = sessionStorage.getItem('idioma')
mostrarResultado('Idioma (sessionStorate): '+ idiomaSessionStorage)

// Eliminar idioma de localStorage
localStorage.removeItem('idioma')

// Limpiar sessionStorage
sessionStorage.clear()

// Función para mostrar resultados en la página
function mostrarResultado(resultado){
    const resultadosDiv = document.getElementById('resultados')
    const resultadoParrafo = document.createElement('p')
    resultadoParrafo.textContent = resultado
    resultadosDiv.appendChild(resultadoParrafo)
}