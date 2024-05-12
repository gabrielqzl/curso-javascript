# Diferencias entre localStorage y sessionStorage
1. Persistencia: Los datos almacenados en localStorage persisten incluso después de cerrar y volver a abrir el navegador, mientras que los datos en sessionStorage se borran cuando se cierra la ventana o pestaña del navegador.
2. Alcance: localStorage tiene un alcance de dominio, lo que significa que los datos almacenados están disponibles para todas las páginas del mismo dominio. Por otro lado, sessionStorage está limitado al contexto de la sesión de navegación actual y solo es accesible para la pestaña o ventana que lo creó.
3. Almacenamiento máximo: La cantidad de datos que se pueden almacenar en localStorage es mayor en comparación con sessionStorage, que tiene un límite más pequeño.

### Métodos comunes de localStorage y sessionStorage

1. setItem(key, value): Almacena un par clave-valor en el almacenamiento local o de sesión.
2. getItem(key): Obtiene el valor asociado con una clave específica del almacenamiento local o de sesión.
3. removeItem(key): Elimina el par clave-valor asociado con una clave específica del almacenamiento local o de sesión.
4. clear(): Elimina todos los pares clave-valor del almacenamiento local o de sesión.

### Ejemplo de Uso (Idioma)
Supongamos que queremos almacenar el idioma seleccionado por el usuario en localStorage y sessionStorage:

```
// Almacenar idioma en localStorage
localStorage.setItem('idioma', 'es');

// Obtener idioma de localStorage
const idiomaLocalStorage = localStorage.getItem('idioma');
console.log('Idioma (localStorage):', idiomaLocalStorage);

// Almacenar idioma en sessionStorage
sessionStorage.setItem('idioma', 'en');

// Obtener idioma de sessionStorage
const idiomaSessionStorage = sessionStorage.getItem('idioma');
console.log('Idioma (sessionStorage):', idiomaSessionStorage);

// Eliminar idioma de localStorage
localStorage.removeItem('idioma');

// Eliminar idioma de sessionStorage
sessionStorage.clear();
```

En este ejemplo, primero almacenamos el idioma seleccionado por el usuario ('es' para español) en localStorage. Luego, obtenemos el idioma almacenado en localStorage y lo mostramos en la consola. Después, almacenamos un idioma diferente ('en' para inglés) en sessionStorage y lo obtenemos. Finalmente, eliminamos el idioma de localStorage y limpiamos todos los datos de sessionStorage.