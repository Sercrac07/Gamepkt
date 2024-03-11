import { hasStorage, RESET_DATA_MESSAGE } from './js/index.js';

if (hasStorage()) {
  const $opt = document.querySelector('.game-options');

  $opt.innerHTML += '<button id="reset-data">Eliminar datos</button>';

  const $reset = document.querySelector('#reset-data');

  const handleReset = () => {
    const confirmation = confirm(RESET_DATA_MESSAGE);

    if (confirmation) {
      localStorage.clear();
      $reset.remove();
    }
  };

  $reset.addEventListener('click', handleReset);
}
