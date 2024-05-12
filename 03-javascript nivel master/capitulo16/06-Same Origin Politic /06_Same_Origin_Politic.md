# Same Origin Politic
La Política de la Misma Origen (Same Origin Policy) es un concepto de seguridad implementado por los navegadores web para restringir las interacciones entre recursos de diferentes orígenes. Este mecanismo ayuda a prevenir ataques de scripting entre sitios (XSS) al limitar la capacidad de un sitio para leer o manipular recursos de otros sitios.

### ¿Cómo funciona la Same Origin Policy?

La Same Origin Policy se basa en la comparación de tres componentes de una URL: el esquema (scheme), el dominio (domain) y el puerto (port). Dos URLs se consideran del mismo origen si coinciden en estos tres componentes.

### Por ejemplo, las siguientes URLs son del mismo origen:

- https://www.ejemplo.com/index.html
- https://www.ejemplo.com/about.html
- https://www.ejemplo.com:8080/index.html

Sin embargo, las siguientes URLs no son del mismo origen:

- https://www.ejemplo.com/index.html
- https://subdominio.ejemplo.com/index.html
- http://www.ejemplo.com/index.html

### Restricciones impuestas por la Same Origin Policy:

1. Acceso a DOM: Un documento HTML solo puede acceder al DOM de documentos que pertenezcan al mismo origen.
2. Acceso a Cookies: Las cookies solo se envían en solicitudes HTTP si la URL del recurso solicitado pertenece al mismo origen que la página que las envía.
3. Acceso a recursos externos: Las solicitudes de recursos externos, como imágenes, scripts y hojas de estilo, están restringidas por la política de la misma origen.
3. Acceso a Web Workers: Los Web Workers también están sujetos a la misma origen política, lo que significa que solo pueden comunicarse con scripts que pertenezcan al mismo origen.

### Trabajo con Same Origin Policy:
1. CORS (Cross-Origin Resource Sharing): Permite a los servidores definir a qué orígenes permiten el acceso a los recursos.
2. JSONP (JSON with Padding): Una técnica que aprovecha la naturaleza permisiva de las etiquetas <script> para cargar recursos desde otros orígenes.

Entender y trabajar dentro de los límites de la Same Origin Policy es crucial para desarrollar aplicaciones web seguras y respetuosas con la privacidad del usuario. La política de misma origen es una capa fundamental de seguridad en la web moderna y debe tenerse en cuenta al diseñar y desarrollar aplicaciones web.