# Sobrescritura de Prototipos vs Métodos

### Sobrescritura de Prototipos
En JavaScript, puedes sobrescribir el prototipo de un objeto para agregar, modificar o eliminar propiedades y métodos heredados por todos los objetos que se crean a partir de ese prototipo.

### Ejemplo

```
// Definir un prototipo
function Animal(nombre) {
    this.nombre = nombre;
}

// Agregar un método al prototipo Animal
Animal.prototype.saludar = function() {
    console.log('Hola, soy un ' + this.nombre);
};

// Crear un objeto utilizando el prototipo Animal
var perro = new Animal('perro');

// Sobrescribir el prototipo Animal
Animal.prototype = {
    hablar: function() {
        console.log('Guau!');
    }
};

// Crear un nuevo objeto después de la sobrescritura del prototipo
var gato = new Animal('gato');

// Llamar al método saludar (no se verá afectado por la sobrescritura del prototipo)
perro.saludar(); // Salida: Hola, soy un perro

// Llamar al método hablar (sobrescrito en el nuevo prototipo)
gato.hablar(); // Salida: Guau!
```

### Sobrescritura de Métodos
Además de sobrescribir el prototipo, también puedes sobrescribir métodos específicos en objetos individuales.

### ejemplo

```
// Definir un prototipo
function Animal(nombre) {
    this.nombre = nombre;
}

// Agregar un método al prototipo Animal
Animal.prototype.hablar = function() {
    console.log('Sonido genérico');
};

// Crear un objeto utilizando el prototipo Animal
var perro = new Animal('perro');

// Sobrescribir el método hablar para el objeto perro
perro.hablar = function() {
    console.log('Guau!');
};

// Llamar al método hablar (sobrescrito en el objeto perro)
perro.hablar(); // Salida: Guau!
```
En este ejemplo, el método hablar() se sobrescribe en el objeto perro, lo que significa que cuando se llama a perro.hablar(), se ejecutará el método sobrescrito en lugar del método definido en el prototipo Animal.prototype.