/**
 * Formatea un texto.
 *
 * ```js
 * toFirstUpperCase('hOLa') // hOLa -> Hola
 * ```
 *
 * @param {string} str
 */
export function toFirstUpperCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLocaleLowerCase();
}
