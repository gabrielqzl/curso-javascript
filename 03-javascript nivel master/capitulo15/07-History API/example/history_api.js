function goBack(){
    history.back();
}

function goForward(){
    history.forward();
}

function goToPage(){
    // Agregar una nueva entrada al historial
    history.pushState({page: "page1"}, "Page 1", "/page1")

    // Cambiar a una nueva página (simulado)
    document.body.innerHTML = "<h2>Page 1</h2>"
}

// En este ejemplo, hay tres botones:

// El primer botón (Go Back) llama a la función goBack(), que navega hacia atrás en el historial del navegador utilizando history.back().
// El segundo botón (Go Forward) llama a la función goForward(), que navega hacia adelante en el historial del navegador utilizando history.forward().
// El tercer botón (Go to Page) llama a la función goToPage(), que agrega una nueva entrada al historial utilizando history.pushState(), simulando la navegación a una nueva página.