# Prototipos en JavaScript

JavaScript es un lenguaje de programación orientado a objetos basado en prototipos. Cada objeto en JavaScript tiene un prototipo del cual hereda propiedades y métodos. Los prototipos permiten compartir propiedades y métodos entre múltiples objetos y son fundamentales para la herencia en JavaScript.

### Funcionamiento de los Prototipos
- Prototipo de Objeto: Cada objeto en JavaScript tiene un prototipo asociado, que es otro objeto al que el objeto actual está vinculado. Puedes acceder al prototipo de un objeto utilizando la propiedad especial __proto__.
- Herencia: Cuando accedes a una propiedad o método de un objeto, JavaScript primero busca la propiedad o método en el propio objeto. Si no se encuentra, busca en el prototipo del objeto y en la cadena de prototipos hasta encontrarlo o llegar al objeto Object.prototype.
- Constructor: Los objetos en JavaScript se crean utilizando funciones constructoras. La propiedad prototype de la función constructora se utiliza como prototipo para los objetos creados con esa función constructora.
Ejemplo de Uso de Prototipos


### EJemplo de Uso de Prototipos

```// Definir una función constructora
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

// Agregar un método al prototipo de Persona
Persona.prototype.saludar = function() {
    console.log('Hola, soy ' + this.nombre + ' y tengo ' + this.edad + ' años.');
};

// Crear un objeto utilizando la función constructora
var persona1 = new Persona('Juan', 30);

// Llamar al método saludar del objeto persona1
persona1.saludar(); // Salida: Hola, soy Juan y tengo 30 años.
```

En este ejemplo, se define una función constructora Persona que toma un nombre y una edad como argumentos y asigna estos valores a propiedades del objeto this. Luego, se agrega un método saludar() al prototipo de Persona. Cuando se crea un objeto persona1 utilizando la función constructora, este objeto hereda automáticamente el método saludar() del prototipo Persona.prototype, y puede llamar a este método como si fuera una propiedad del propio objeto.