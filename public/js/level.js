import { getData } from './data';

export function handleLevel(level, condition) {
  const $buttonVerify = document.querySelector('button');

  const levelData = getData();

  $buttonVerify.addEventListener('click', () => {
    const outerStyle = 'position: absolute; top: 0; left: 0; width: 100%; height: 100vh; display: flex; justify-content: center; align-items: center; background: #0003;';

    if (levelData.levels[level].condition(levelData.levels[level])) {
      document.body.innerHTML += `<div style='${outerStyle}'><div><h2>Has completado el nivel.</h2></div></div>`;
    } else {
      document.body.innerHTML += 'lol';
    }
  });
}
