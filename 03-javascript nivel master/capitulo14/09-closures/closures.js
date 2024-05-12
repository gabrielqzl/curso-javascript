// Definir la función que devuelve un closure contador
function contador(){
    let contador = 0

    // Definir la función interna incrementar() que tiene acceso al ámbito de contador

    function incrementar(){
        contador++
        console.log(contador)
    }

    // Devolver la función interna incrementar(), que forma un closure
    return incrementar
}

// Crear una instancia del closure contador
const incrementarContador = contador()

// Llamar a la función incrementar() múltiples veces
incrementarContador()
incrementarContador()
incrementarContador()