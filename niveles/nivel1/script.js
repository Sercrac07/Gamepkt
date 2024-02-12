import { $, handleMissions } from '../../js/index.js';

const $map = $('map');

let nivelStorage = localStorage.getItem('nivel');

if (!nivelStorage) {
  localStorage.setItem(
    'nivel',
    `{
      "id": 1,
      "misions": [
        { "id": 1, "dificulty": "easy", "name": "Conecta los dos ordenadores", "done": false },
        { "id": 2, "dificulty": "medium", "name": "Haz un ping entre los dispositivos", "done": false }
      ]
    }`
  );

  nivelStorage = localStorage.getItem('nivel');
}

const nivelUser = JSON.parse(nivelStorage);

handleMissions(nivelUser.misions);
