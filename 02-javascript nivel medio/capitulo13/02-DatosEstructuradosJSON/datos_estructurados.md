# Datos Estructurados JSON

JSON (JavaScript Object Notation) es un formato ligero de intercambio de datos que se utiliza comúnmente para transmitir datos entre un servidor y un cliente web. Es legible para los humanos y fácil de entender, y se basa en la sintaxis de los objetos JavaScript.

Ejemplo de JSON

```
{
  "nombre": "Juan",
  "edad": 30,
  "ciudad": "Ciudad de México",
  "intereses": ["programación", "viajes", "lectura"]
}

```

En este ejemplo, se muestra un objeto JSON que representa información sobre una persona. El objeto tiene propiedades como "nombre", "edad", "ciudad" e "intereses".

### Uso de JSON en JavaScript
En JavaScript, puedes analizar (parsear) una cadena JSON en un objeto JavaScript utilizando el método JSON.parse() y convertir un objeto JavaScript en una cadena JSON utilizando el método JSON.stringify().

```
// Convertir un objeto JavaScript a JSON
var persona = { nombre: "Juan", edad: 30, ciudad: "Ciudad de México" };
var personaJSON = JSON.stringify(persona);
console.log(personaJSON);

// Analizar (parsear) una cadena JSON a un objeto JavaScript
var personaRecuperada = JSON.parse(personaJSON);
console.log(personaRecuperada);
```


