import { LEVEL, getStorage, MISSIONS, MATERIALS, handlePcDrag } from './index.js';

/**
 * Devuelve el almacenamiento local del nivel proporcionado.
 *
 * ```javascript
 * const currentLevel = getLevel(1);
 * ```
 *
 * @param {number} level
 * @returns {typeof LEVEL}
 */
export function getLevel(level) {
  let levelStorage = localStorage.getItem('level');

  if (!levelStorage || JSON.parse(levelStorage).id !== level) {
    localStorage.setItem(
      'level',
      `{
        "id": ${level},
        "missions": ${JSON.stringify(MISSIONS[level])},
        "materials": ${JSON.stringify(MATERIALS[level])}
      }`
    );
    levelStorage = localStorage.getItem('level');
  }

  const parsed = JSON.parse(levelStorage);

  return parsed;
}

/**
 * Revisa si el usuario puede jugar el nivel proporcionado.
 *
 * ```javascript
 * if (handleEnabled()) console.log(true);
 * ```
 *
 * @param {number} level
 */
function handleEnabled(level) {
  const { userLevels } = getStorage();

  if (!userLevels[level].enabled) location.href = '/mapa/';
}

/**
 * Muestra todas las misiones en pantalla.
 *
 * ```javascript
 * handleMissions(currentLevel.missions);
 * ```
 *
 * @param {ReturnType<typeof getLevel>['missions']} missions
 */
function handleMissions(missions) {
  const $missions = document.querySelector('#missions');

  missions.forEach(mission => {
    $missions.innerHTML += `<li>${mission}</li>`;
  });
}

/**
 * Muestra todos los materiales en pantalla.
 *
 * ```javascript
 * handleMaterials(currentLevel.materials);
 * ```
 *
 * @param {ReturnType<typeof getLevel>['materials']} materials
 */
function handleMaterials(materials) {
  const $materials = document.querySelector('#materials');

  const ELEMENTS = {
    cable: 0,
    pc: 0,
  };

  materials.forEach(material => {
    ELEMENTS[material.name]++;
  });

  for (const el in ELEMENTS) {
    if (ELEMENTS[el] > 0) $materials.innerHTML += `<li><img data-type="material" data-name="${el}" src="/assets/${el}.png" alt="${el}" /><span>${ELEMENTS[el]}</span></li>`;
  }
}

/**
 * Administra el nivel proporcionado.
 *
 * ```javascript
 * handleLevel(1, (level) => {});
 * ```
 *
 * @param {number} level
 * @param {(level: ReturnType<typeof getLevel>) => boolean} verification
 */
export function handleLevel(level, verification) {
  const { userLevels, userLogros } = getStorage();
  const currentLevel = getLevel(level);

  handleEnabled(level);

  handleMissions(currentLevel.missions);
  handleMaterials(currentLevel.materials);

  const $imgs = document.querySelectorAll('img');

  $imgs.forEach(($img, index) => {
    /**
     * @type {'element' | 'material'}
     */
    const type = $img.getAttribute('data-type');
    /**
     * @type {'pc' | 'cable'}
     */
    const name = $img.getAttribute('data-name');

    if (type === 'material') {
      if (name === 'pc') {
        handlePcDrag($img, level);
      }
    } else if (type === 'element') {
      if (name === 'pc') {
        handlePcOpen();
      }
    }
  });
}
