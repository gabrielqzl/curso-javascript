Tema: DOM (Document Object Model)

Contenido:

Nodo:

    Un nodo en el DOM es cualquier etiqueta del cuerpo, como un párrafo, el mismo body o incluso las etiquetas de una lista.
    Existen diferentes tipos de nodos:
        Document: el nodo document es el nodo raiz, a partir del cual derivan el resto de nodos.
        Element: nodos definidos por etiquetas html.
        Text: el texto dentro de un nodo element se considera un nuevo nodo hijo de tipo text (texto).
        Attribute: los atributos de las etiquetas definen nodos, (en Javascript no los veremos como nodos, sino como información asociada al nodo de tipo element)
        Comentarios y otros: los comentarios y otros elementos como las declaraciones doctype en cabecera de los documentos HTML generan nodos.

Métodos de selección de elementos:

    getElementById(): Selecciona un elemento por ID.
    getElementsByTagName(): Selecciona todos los elementos que coincidan con el nombre de la etiqueta especificada.
    querySelector(): Devuelve el primer elemento que coincida con el grupo especificado de selectores.
    querySelectorAll(): Devuelve todos los elementos que coincidan con el grupo especificado de selectores.

Métodos para definir, obtener y eliminar valores de atributos:

    setAttribute(): Modifica el valor de un atributo.
    getAttribute(): Obtiene el valor de un atributo.
    removeAttribute(): Remueve el valor de un atributo.

Nota: La imagen contiene algunos errores tipográficos, como "de nodos" que debería ser "de tipos de nodos".

Información adicional:

    El DOM es una API que permite a los scripts acceder y modificar el contenido de un documento HTML o XML.
    El DOM define una estructura de árbol para el documento, con nodos que representan diferentes elementos del documento.
    Los métodos de selección de elementos permiten obtener acceso a los nodos específicos del árbol DOM.
    Los métodos para definir, obtener y eliminar valores de atributos permiten modificar el contenido de los elementos del DOM.
|

30) Atributos globales

    contenteditable: Indica si el elemento puede ser modificable por el usuario (bool).
    dir: Indica la direccionalidad del texto.
    hidden: Indica si el elemento aún no es, o ya no es, relevante.
    id: Define un identificador único.
    style: Contiene declaraciones de estilo CSS para ser aplicadas al elemento.
    tabindex: Indica si el elemento puede obtener un foco de entrada.
    title: Contiene un texto con información relacionada al elemento al que pertenece.

31) Atributo Style: Usos y ejemplos

    Propiedades Camel Case: Se utiliza la notación Camel Case para nombrar las propiedades CSS.

Atributos adicionales

    lang: Especifica el idioma del contenido del elemento.
    spellcheck: Indica si el elemento debe ser revisado por el corrector ortográfico.
    translate: Indica si el contenido del elemento debe ser traducido.

Ejemplos de uso

    contenteditable: Se puede usar para crear un editor de texto en línea.
    dir: Se puede usar para mostrar el texto en la dirección correcta, de izquierda a derecha o de derecha a izquierda.
    hidden: Se puede usar para ocultar un elemento temporalmente.
    id: Se puede usar para identificar un elemento de forma única.
    style: Se puede usar para aplicar estilos CSS al elemento.
    tabindex: Se puede usar para que el elemento pueda ser seleccionado con el teclado.
    title: Se puede usar para mostrar una información emergente con información adicional sobre el elemento.

Propiedades Camel Case

Las propiedades CSS se nombran utilizando la notación Camel Case, en la que la primera letra de cada palabra es mayúscula, excepto la primera. Por ejemplo, la propiedad background-color se escribe como backgroundColor.
Limitaciones

Es importante tener en cuenta que el reconocimiento óptico de caracteres (OCR) no es perfecto. Es posible que el texto extraído de la imagen no sea completamente preciso, especialmente si la imagen es de baja calidad o si el texto está escrito a mano.

32) Atributos de inputs:
Nombre	Descripción
className:	Nombre de la clase del input.
value:	Valor actual del input.
type:	Tipo de input (text, password, number, etc.).
accept:	Tipos de archivos aceptados (para inputs de tipo file).
form:	Nombre del formulario al que pertenece el input.
minlength:	Longitud mínima del valor del input.
placeholder:	Texto que se muestra en el input cuando está vacío.
required:	Indica si el input es obligatorio.

