import { $ } from './index.js';

export function createLevelStorage() {
  localStorage.setItem(
    'niveles',
    `[
      { "id": 1, "name": "Conexión entre pares", "enabled": true },
      { "id": 2, "name": "LAN sin acceso a red", "enabled": false }
    ]`
  );
}

/**
 * Verifica que el usuario tenga acceso al nivel proporcionado. Sí no es el caso, redirrecciona al usuario de vuelta a la selección de niveles.
 * @param {number} level Nivel a verificar.
 */
export function handleLevel(level) {
  let nivelesStorage = localStorage.getItem('niveles');

  if (!nivelesStorage) {
    createLevelStorage();

    nivelesStorage = localStorage.getItem('niveles');
  }

  const nivelesUser = JSON.parse(nivelesStorage);

  const nivel = nivelesUser.filter(nivel => nivel.id === level)[0];

  if (!nivel.enabled) {
    location.href = '/niveles/';
  }
}

/**
 * Administra las misiones del nivel.
 * @param {{ id: number, dificulty: 'easy' | 'medium' | 'hard', name: string, done: boolean }[]} misions Misiones
 */
export function handleMissions(misions) {
  const $mis = $('mis');

  const easyMisions = misions.filter(mis => mis.dificulty === 'easy');
  const mediumMisions = misions.filter(mis => mis.dificulty === 'medium');
  const hardMisions = misions.filter(mis => mis.dificulty === 'hard');

  if (easyMisions.length !== 0) {
    $mis.innerHTML += '<h3>Misiones principales</h3>';

    easyMisions.forEach(mision => {
      $mis.innerHTML += `<li>${mision.name}</li>`;
    });
  }

  if (mediumMisions.length !== 0) {
    $mis.innerHTML += '<h3>Misiones secundarias</h3>';

    mediumMisions.forEach(mision => {
      $mis.innerHTML += `<li>${mision.name}</li>`;
    });
  }

  if (hardMisions.length !== 0) {
    $mis.innerHTML += '<h3>Misiones extras</h3>';

    hardMisions.forEach(mision => {
      $mis.innerHTML += `<li>${mision.name}</li>`;
    });
  }
}
