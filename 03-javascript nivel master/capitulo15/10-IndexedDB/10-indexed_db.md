# IndexedDB
 
 IndexedDB es una API de navegador que permite almacenar y recuperar grandes cantidades de datos de forma estructurada en el navegador del usuario. Es una base de datos orientada a objetos que permite a las aplicaciones web almacenar datos de manera persistente, incluso cuando el usuario cierra el navegador o apaga su dispositivo.

###  Características Principales de IndexedDB:

1. **Base de Datos Transaccional**: IndexedDB utiliza transacciones para garantizar la integridad de los datos y la consistencia de las operaciones de lectura y escritura.
2. **Almacenamiento de Objetos**: Los datos se almacenan en forma de objetos JavaScript en almacenes de objetos. Cada objeto tiene una clave única que se utiliza para acceder a él.
3. **Índices**: IndexedDB permite crear índices en las propiedades de los objetos para facilitar la búsqueda y recuperación de datos.
4. **Eventos Asíncronos**: IndexedDB utiliza eventos asíncronos y devoluciones de llamada para realizar operaciones de lectura y escritura, lo que evita bloquear el hilo principal del navegador y mejora la capacidad de respuesta de la aplicación.
5. **Soporte de Transacciones**: Las transacciones pueden ser de lectura o escritura, y pueden contener una o más operaciones.

### Métodos del objeto indexedDB

- indexedDB.open(name, version): Abre una base de datos existente o crea una nueva.

### Métodos del objeto IDBDatabase

- IDBDatabase.transaction(storeNames, mode): Inicia una transacción en la base de datos.
- IDBDatabase.createObjectStore(name, options): Crea un nuevo almacén de objetos en la base de datos.
- IDBDatabase.deleteObjectStore(name): Elimina un almacén de objetos de la base de datos.
- IDBDatabase.close(): Cierra la conexión con la base de datos.

### Métodos del objeto IDBTransaction

- IDBTransaction.objectStore(name): Devuelve una referencia al almacén de objetos especificado en la transacción.
 IDBTransaction.abort(): Cancela la transacción.

### Métodos del objeto IDBObjectStore
- IDBObjectStore.put(value, key): Añade un nuevo objeto o actualiza un objeto existente en el almacén de objetos.
- IDBObjectStore.add(value, key): Añade un nuevo objeto en el almacén de objetos. Si ya existe un objeto con la misma clave, la operación fallará.
- IDBObjectStore.get(key): Devuelve el objeto almacenado en el almacén de objetos con la clave especificada.
- IDBObjectStore.delete(key): Elimina el objeto del almacén de objetos con la clave especificada.
- IDBObjectStore.clear(): Elimina todos los objetos del almacén de objetos.
### Otros métodos
- indexedDB.deleteDatabase(name): Elimina una base de datos existente.

### Ejemplo de uso

```
// Abrir o crear una base de datos
var request = indexedDB.open('mi_base_de_datos', 1);

// Manejar eventos de éxito y error al abrir la base de datos
request.onerror = function(event) {
  console.log('Error al abrir la base de datos');
};
request.onsuccess = function(event) {
  console.log('Base de datos abierta con éxito');
  var db = event.target.result;

  // Realizar operaciones de lectura y escritura aquí
};

```

En este ejemplo, estamos abriendo una base de datos llamada 'mi_base_de_datos' con una versión de 1. Si la base de datos no existe, se creará automáticamente. Una vez que la base de datos se abre con éxito, podemos realizar operaciones de lectura y escritura en ella.