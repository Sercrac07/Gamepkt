/**
 * Almacena todos los niveles del juego.
 *
 * ```javascript
 * const levelOne = LEVELS[1];
 * ```
 *
 * @type {{ [key: number]: { name: string; enabled: boolean } }}
 */
export const LEVELS = {
  1: { name: 'Conexión entre pares.', enabled: true },
};

/**
 * Almacena todas las misiones de todos los niveles.
 *
 * ```javascript
 * const missionOne = MISSIONS[1];
 * ```
 *
 * @type {{ [key: number]: string[] }}
 */
export const MISSIONS = {
  1: ['Conecta los dos ordenadores.'],
};

/**
 * Almacena todos los materiales de cada nivel.
 *
 * ```javascript
 * const materialOne = MATERIALS[1];
 * ```
 *
 * @type {{ [key: number]:
 *  ({
 *    name: 'cable';
 *  } | {
 *    name: 'pc';
 *    connections: { name: 'pc', id: number }[]
 *  })[]
 * }}
 */
export const MATERIALS = {
  1: [{ name: 'cable' }, { name: 'pc', connections: [] }, { name: 'pc', connections: [] }],
};

/**
 * Alamcena todos los logros.
 *
 * ```javascript
 * const primerLogro = LOGROS[0];
 * ```
 *
 * @type {[{ name: string }]}
 */
export const LOGROS = [{ name: 'Consigue superar 3 niveles.' }];

/**
 * Almacena el valor de un nivel.
 *
 * @type {{
 *  id: number;
 *  missions: typeof MISSIONS[number];
 *  materials: typeof MATERIALS[number];
 * }}
 */
export const LEVEL = {
  id: 0,
  missions: [],
  materials: [],
};
