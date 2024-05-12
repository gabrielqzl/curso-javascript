--------- CAPITULO 9 ---------

Eventos
Handlers, Listeners y Objeto Event
Event Flow (Bubbling y Capturing)
StopPropagation
Mouse Events
Key Events
Interface Events
Timers
Historia de Cofla 9 problema A
Historia de Cofla 9 problema B

## Eventos

### Definición

- de Eventos o "Event Handlers"
- Escucha de eventos o 'Event Listeners"
- El objeto Event
- Flujo de Eventos o 'event flow"
- Event Bubbling vs Event Capturing
- event.stopPropagation

### Eventos en JavaScript
Definición
Los eventos en JavaScript son acciones que ocurren en el navegador del usuario, como hacer clic en un elemento, mover el mouse, presionar una tecla, etc. Los eventos permiten que tu código responda dinámicamente a las acciones del usuario y a otras interacciones en la página web.

### Event Handlers (Manejadores de Eventos)
Los event handlers, o manejadores de eventos, son funciones que se ejecutan cuando ocurre un evento específico. Pueden estar adjuntos directamente a un elemento HTML en línea o definidos como funciones separadas.

```
// Ejemplo de event handler en línea
<button onclick="saludar()">Haz clic aquí</button>

// Ejemplo de event handler definido como función
document.getElementById('myButton').addEventListener('click', function() {
alert('¡Hola mundo!');
});

```

### Event Listeners (Escuchadores de Eventos)
Los event listeners, o escuchadores de eventos, son funciones que esperan un evento específico para ejecutarse. Son una forma más flexible y preferida de manejar eventos en comparación con los event handlers en línea.

``` 
document.getElementById('myButton').addEventListener('click', function() {
    alert('¡Hola mundo!');
});

```

## El objeto Event
El objeto Event proporciona información detallada sobre el evento que ha ocurrido, como el tipo de evento, el objetivo del evento, las coordenadas del puntero del mouse, etc.

``` 
document.getElementById('myButton').addEventListener('click', function(event) {
    console.log('Tipo de evento:', event.type);
    console.log('Objetivo del evento:', event.target);
});

```

## Flujo de Eventos (Event Flow)
El flujo de eventos en JavaScript describe el orden en que los eventos son capturados y propagados en el DOM. El evento puede fluir en dos direcciones: bubbling (burbujeo) y capturing (captura).

## Event Bubbling vs Event Capturing
El bubbling es cuando un evento se propaga desde el elemento más interno hacia el elemento más externo. El capturing es cuando un evento se captura en el elemento más externo y luego se propaga hacia el elemento más interno.

## event.stopPropagation
El método stopPropagation() se utiliza para detener la propagación del evento, evitando que se propague a los elementos superiores en el DOM.

``` 
document.getElementById('myButton').addEventListener('click', function(event) {
    event.stopPropagation(); // Detiene la propagación del evento
    alert('¡Botón clickeado!');
});

```