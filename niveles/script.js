import { $, createLevelStorage } from '../js/index.js';

const $map = $('map');

let nivelesStorage = localStorage.getItem('niveles');

if (!nivelesStorage) {
  createLevelStorage();

  nivelesStorage = localStorage.getItem('niveles');
}

const nivelesUser = JSON.parse(nivelesStorage);

nivelesUser.forEach(nivel => {
  $map.innerHTML += `<button onclick="location.href = 'nivel${nivel.id}'" ${
    nivel.enabled ? '' : ' disabled'
  }>${nivel.name}</button>`;
});
