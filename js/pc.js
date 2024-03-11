import { getLevel } from './index.js';

/**
 *
 * @param {HTMLImageElement} img
 * @param {ReturnType<typeof getLevel>} level
 */
export function handlePcDrag(img, level) {
  /**
   * @param {DragEvent} e
   */
  const listener = e => {
    e.preventDefault();

    img.removeEventListener('dragstart', listener);
  };

  img.addEventListener('dragstart', listener);
}
