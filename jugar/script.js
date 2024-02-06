const $map = document.getElementById('map'); // Para recoger el id "map" del html

let mapStorage = localStorage.getItem('map'); //Crea las coockies
let extraStorage = localStorage.getItem('extra'); //Crea las coockies
let hiddenStorage = localStorage.getItem('hidden'); //Crea las coockies

if (!mapStorage) {
  // Esto es para cuando no existe las coockies hace esto
  localStorage.setItem(
    'map',
    `[
        { "name": "Conectividad entre ordenadores", "available": true }, 
        { "name": "Nivel 2", "available": false }, 
        { "name": "Nivel 3", "available": false }, 
        { "name": "Nivel 4", "available": false }, 
        { "name": "Nivel 5", "available": false }, 
        { "name": "Nivel 6", "available": false }, 
        { "name": "Nivel 7", "available": false }, 
        { "name": "Nivel 8", "available": false }, 
        { "name": "Nivel 9", "available": false }, 
        { "name": "Nivel 10", "available": false }
    ]`
  );

  mapStorage = localStorage.getItem('map'); // Recoge el mapa cuando se ha creado uno nuevo
}

if (!extraStorage) {
  // Esto es para cuando no existe las coockies hace esto
  localStorage.setItem(
    'extra',
    `[
        { "name": "Extra 1", "available": false }
    ]`
  );

  extraStorage = localStorage.getItem('extra'); // Recoge el mapa cuando se ha creado uno nuevo
}

if (!hiddenStorage) {
  // Esto es para cuando no existe las coockies hace esto
  localStorage.setItem(
    'hidden',
    `[
        { "name": "Oculto 1", "available": false }
    ]`
  );

  hiddenStorage = localStorage.getItem('hidden'); // Recoge el mapa cuando se ha creado uno nuevo
}

const mapUser = JSON.parse(mapStorage); // Cambia el valor de strng a json
const extraUser = JSON.parse(extraStorage); // Cambia el valor de string a json
const hiddenUser = JSON.parse(hiddenStorage); // Cambia el valor de strng a json

mapUser.forEach((map, index) => {
  // Para cada valor almacenado crea un boton con el nombre del nivel normal
  $map.innerHTML += `<button onclick='location.href = "/levels/nivel${
    index + 1
  }/"'${map.available ? '' : ' disabled'}><h1>${map.name}</h1></button>`;
});

extraUser.forEach((extra, index) => {
  // Para cada valor almacenado crea un boton con el nombre del nivel extra
  $map.innerHTML += `<button onclick='location.href = "/levels/extra${
    index + 1
  }/"'${extra.available ? '' : ' disabled'}><h1>${extra.name}</h1></button>`;
});

hiddenUser.forEach((hidden, index) => {
  // Para cada valor almacenado crea un boton con el nombre del nivel oculto
  $map.innerHTML += `<button onclick='location.href = "/levels/oculto${
    index + 1
  }/"'${hidden.available ? '' : 'disabled'}><h1>${
    hidden.available ? hidden.name : '???'
  }</h1></button>`;
});
