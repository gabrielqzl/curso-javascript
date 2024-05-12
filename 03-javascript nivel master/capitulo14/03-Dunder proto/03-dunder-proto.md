# Dunder Protos (Dunder Prototypes)

Los Dunder Protos, abreviatura de "Double Underscore Prototypes" o "Prototipos de Doble Guión Bajo", se refieren a la convención de nombrar propiedades y métodos privados en los prototipos de JavaScript utilizando dobles guiones bajos (doble underscore o dunder).

### Uso de Dunder Protos
En JavaScript, no existe un verdadero concepto de propiedades o métodos privados como en otros lenguajes de programación, pero la convención de nombrar propiedades y métodos con dobles guiones bajos indica que no se deben acceder directamente desde fuera del objeto.

```
// Definir un prototipo con Dunder Protos
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

Persona.prototype.__saludar = function() {
    console.log('Hola, soy ' + this.nombre + ' y tengo ' + this.edad + ' años.');
};

// Crear un objeto utilizando el prototipo Persona
var persona1 = new Persona('Juan', 30);

// Llamar al método __saludar del objeto persona1
persona1.__saludar(); // Salida: Hola, soy Juan y tengo 30 años.
```
En este ejemplo, el método __saludar() se define en el prototipo de Persona utilizando la convención de Dunder Protos. Aunque este método puede ser llamado desde fuera del objeto, su nombre con dobles guiones bajos indica que no se debe acceder directamente desde fuera del objeto y se considera como un método "privado".

Es importante tener en cuenta que esta es solo una convención de nomenclatura y no proporciona verdadera privacidad en el sentido que otras programaciones pueden entenderla.