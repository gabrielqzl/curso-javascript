let db;

let request = window.indexedDB.open('names_db', 1);

request.onerror = function (event) {
  console.error('Error al abrir la base de datos');
};

request.onsuccess = function (event) {
  console.log('Base de datos abierta con éxito');
  db = event.target.result;

  displayNames();
};

request.onupgradeneeded = function (event) {
  console.log('Base de datos creada o actualizada');
  let db = event.target.result;

  let objectStore = db.createObjectStore('name_arepa', { keyPath: 'id', autoIncrement: true });
};

document.getElementById('addButton').addEventListener('click', function () {
  let nameInput = document.getElementById('nameInput').value;

  if (nameInput.trim() === '') {
    alert('Por favor, ingrese un nombre');
    return;
  }

  let transaction = db.transaction(['name_arepa'], 'readwrite');
  let objectStore = transaction.objectStore('name_arepa');

  let data = { name: nameInput };
  let request = objectStore.add(data);

  request.onsuccess = function (event) {
    console.log('Nombre guardado con éxito');
    displayNames();
  };

  request.onerror = function (event) {
    console.error('Error al guardar el nombre');
  };
});

function displayNames() {
  let nameList = document.getElementById('nameList');
  nameList.innerHTML = '';

  let objectStore = db.transaction('name_arepa').objectStore('name_arepa');

  objectStore.openCursor().onsuccess = function (event) {
    let cursor = event.target.result;
    if (cursor) {
      let li = document.createElement('li');
      li.textContent = cursor.value.name;
      nameList.appendChild(li);

      cursor.continue();
    }
  };
}