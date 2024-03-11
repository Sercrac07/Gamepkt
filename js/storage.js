import { LEVELS, LOGROS } from './index.js';

/**
 * Devuelve el almacenamiento local del videojuego. Si no tiene almacenamiento, se creará.
 *
 * ```javascript
 * const { levels, logros } = getStorage();
 * ```
 *
 * @returns {{
 *  userLevels: typeof LEVELS;
 *  userLogros: typeof LOGROS;
 * }}
 */
export function getStorage() {
  let levelsStorage = localStorage.getItem('levels');

  if (!levelsStorage) {
    localStorage.setItem('levels', JSON.stringify(LEVELS));
    levelsStorage = localStorage.getItem('levels');
  }

  const userLevels = JSON.parse(levelsStorage);

  let logrosStorage = localStorage.getItem('logros');

  if (!logrosStorage) {
    localStorage.setItem('logros', JSON.stringify(LOGROS));
    logrosStorage = localStorage.getItem('logros');
  }

  const userLogros = JSON.parse(logrosStorage);

  return { userLevels, userLogros };
}

/**
 * Revisa si el usuario tiene o no almacenamiento local del videojuego.
 *
 * ```javascript
 * const tieneAlmacenamiento = hasStorage();
 * ```
 */
export function hasStorage() {
  const levels = localStorage.getItem('levels');
  const level = localStorage.getItem('level');
  const logros = localStorage.getItem('logros');

  if (levels || level || logros) return true;
  else return false;
}
