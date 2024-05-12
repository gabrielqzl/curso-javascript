// Convertir un objeto JavaScript a JSON
var persona = { nombre: "Juan", edad: 30, ciudad: "Ciudad de México" };
var personaJSON = JSON.stringify(persona);
console.log('Objeto JavaScript convertido a JSON:', personaJSON);

// Analizar (parsear) una cadena JSON a un objeto JavaScript
var personaRecuperada = JSON.parse(personaJSON);
console.log('JSON parseado a objeto JavaScript:', personaRecuperada);
