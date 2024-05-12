# Lazy Loading
Lazy loading es una técnica utilizada para cargar recursos (como imágenes, videos, o contenido de iframes) de manera diferida, es decir, cargarlos solo cuando son necesarios, generalmente cuando el usuario los visualiza en la pantalla. Esto puede mejorar significativamente los tiempos de carga de una página web y reducir el consumo de ancho de banda, especialmente en páginas con mucho contenido multimedia.

### Ventajas de Lazy Loading:

1. Mejora los tiempos de carga inicial de la página.
2. Reduce el consumo de ancho de banda, especialmente en dispositivos móviles.
3. Permite priorizar la carga de recursos críticos para la experiencia del usuario.
3. Puede mejorar el rendimiento de la página y la experiencia de usuario al reducir la carga inicial.

### Implementación:

La implementación de lazy loading generalmente implica retrasar la carga de los recursos hasta que sean necesarios. Esto se puede lograr de varias formas, pero una técnica común es utilizar Intersection Observer para detectar cuándo los elementos entran en el viewport del navegador y luego cargar los recursos en ese momento.