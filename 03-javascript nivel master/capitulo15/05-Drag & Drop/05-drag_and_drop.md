# Drag & Drop

El Drag & Drop, o arrastrar y soltar, es una funcionalidad de JavaScript que permite a los usuarios arrastrar elementos HTML y soltarlos en otras partes de la página.

### Eventos del Objeto
- dragstart: Se dispara cuando se inicia el arrastre de un elemento.
- drag: Se dispara mientras se está arrastrando un elemento.
dragend: Se dispara cuando se completa el arrastre de un elemento.
### Eventos de Zona
- dragenter: Se dispara cuando un elemento arrastrado entra en el área de soltar.
- dragmove: Se dispara mientras un elemento arrastrado se mueve sobre el área de soltar.
- drop: Se dispara cuando un elemento arrastrado se suelta en el área de soltar.
- dragleave: Se dispara cuando un elemento arrastrado sale del área de soltar.
-dragover:  se activa cuando un elemento o texto se arrastra sobre un objetivo de caída válido (cada cientos de milisegundos).

### Propiedad dataTransfer
- getData(format): Retorna los datos almacenados en el objeto dataTransfer asociados con un formato específico.
- setData(format, data): Establece los datos para ser transferidos durante el arrastre, asociados con un formato específico.

Estos eventos y propiedades son fundamentales para implementar la funcionalidad de arrastrar y soltar en JavaScript. Permiten controlar el proceso de arrastre y soltar, así como transferir datos entre elementos durante esta interacción.