import { $ } from '../js/index.js';

const $map = $('map');

let nivelesStorage = localStorage.getItem('niveles');

if (!nivelesStorage) {
  localStorage.setItem(
    'niveles',
    `[
      { "id": 1, "name": "Conexión entre pares" },
      { "id": 2, "name": "Prueba dos" }
    ]`
  );

  nivelesStorage = localStorage.getItem('niveles');
}

const nivelesUser = JSON.parse(nivelesStorage);

nivelesUser.forEach(nivel => {
  $map.innerHTML += `<div class="planet${nivel.id}-outline"><div class="planet${nivel.id}"><img src="/img/TEST1.png" alt="" /></div></div>`;
});
