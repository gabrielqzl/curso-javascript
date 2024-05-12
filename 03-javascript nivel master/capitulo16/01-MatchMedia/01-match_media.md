# MatchMedia

**matchMedia** es una función que se utiliza para realizar consultas de medios en JavaScript. Permite verificar si el documento actual coincide con las reglas de medios especificadas, como el ancho de la pantalla, el tipo de dispositivo o la orientación. Esto es útil para aplicar estilos o ejecutar scripts según las características del dispositivo o del navegador.

### Uso básico:
javascript
Copy code

```
// Verifica si la pantalla es más ancha que 600px
const mediaQuery = window.matchMedia('(min-width: 600px)');

// Comprueba si la consulta de medios coincide
if (mediaQuery.matches) {
  // El documento coincide con la consulta de medios
  console.log('La pantalla es más ancha que 600px');
} else {
  // El documento no coincide con la consulta de medios
  console.log('La pantalla es igual o más estrecha que 600px');
}

// También puedes agregar un listener para detectar cambios
mediaQuery.addListener((event) => {
  if (event.matches) {
    console.log('La pantalla ahora es más ancha que 600px');
  } else {
    console.log('La pantalla ahora es igual o más estrecha que 600px');
  }
});
```

### Métodos y propiedades:
- matches: Devuelve true si el documento coincide con la consulta de medios, y false si no.
- media: Devuelve la cadena de medios especificada en la consulta.
- addListener(callback): Agrega un listener para detectar cambios en la consulta de medios.

**matchMedia** es una herramienta poderosa para crear diseños responsivos y aplicaciones web adaptativas que se ajustan automáticamente según las características del dispositivo del usuario.