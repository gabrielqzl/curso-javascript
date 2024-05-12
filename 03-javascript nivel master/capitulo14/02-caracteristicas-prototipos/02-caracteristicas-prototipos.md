## Características de los Prototipos

Las características principales de los prototipos en JavaScript son las siguientes:

1. Herencia: Los prototipos permiten la herencia de propiedades y métodos entre objetos. Un objeto puede heredar propiedades y métodos de su prototipo y de la cadena de prototipos.
2. Reutilización de código: Los prototipos facilitan la reutilización de código al permitir que múltiples objetos compartan las mismas propiedades y métodos a través de su prototipo.
3. Dinamismo: Los prototipos son dinámicos en JavaScript, lo que significa que puedes modificar el prototipo de un objeto en tiempo de ejecución, lo que afectará a todos los objetos que hereden de ese prototipo.
4. Eficiencia: Al compartir propiedades y métodos a través de prototipos, JavaScript ahorra memoria y mejora la eficiencia en la creación de objetos.
5. Encadenamiento de prototipos: Los objetos en JavaScript forman una cadena de prototipos, donde cada objeto tiene un prototipo que a su vez puede tener otro prototipo, y así sucesivamente, hasta llegar al objeto Object.prototype, que es la base de la cadena de prototipos.
6. Constructor: Cada función en JavaScript tiene una propiedad prototype que se utiliza como prototipo para los objetos creados con esa función constructora. Esta propiedad prototype define los métodos y propiedades que serán heredados por los objetos creados con esa función constructora.