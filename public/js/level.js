import { getData, saveData, DATA } from './data';

/**
 * @param {keyof typeof DATA['levels']} level
 */
export function handleLevel(level) {
  const $buttonVerify = document.querySelector('button');
  const $imgs = document.querySelectorAll('img');

  const levelData = getData();
  let currentLevel = levelData.levels[level];

  $buttonVerify.addEventListener('click', () => {
    const outerStyle = 'position: absolute; top: 0; left: 0; width: 100%; height: 100vh; display: flex; justify-content: center; align-items: center; background: #0003;';

    if (levelData.levels[level].condition(levelData.levels[level])) {
      document.body.innerHTML += `<div style='${outerStyle}'><div><h2>Has completado el nivel.</h2></div></div>`;
    } else {
      document.body.innerHTML += 'lol';
    }
  });

  let runPc = 0;

  $imgs.forEach(($img, index) => {
    const type = $img.getAttribute('data-type');
    const name = $img.getAttribute('data-name');

    const pcElementListener = () => {
      const outerStyle = 'position: absolute; top: 0; left: 0; width: 100%; height: 100vh; display: flex; justify-content: center; align-items: center; background: #0003;';
      const innerStyle = 'backgound: #000; width:200px; height: 500px';
      const $main = document.querySelector('main');

      const pcId = Number($img.getAttribute('data-pc'));

      $main.innerHTML += `<div style='${outerStyle}'><div style='${innerStyle}'><h2>Menu de ordenador</h2><form id="pc${index}"><input required value='${currentLevel.elements[pcId].ip}' type='text' id='ip' name='ip'/><input value='${currentLevel.elements[pcId].gateway}' type='text' id='gateway' name='gateway' /><input value='${currentLevel.elements[pcId].dns}' type='text' id='dns' name='dns' /><input type='submit' value='Enviar'/></form></div></div>`;

      document.querySelector('form').addEventListener('submit', e => {
        e.preventDefault();
        const { ip, mask, gateway, dns } = Object.fromEntries(new FormData(e.target));

        levelData.levels[level].elements[pcId] = { name: 'pc', ip, mask, gateway, dns };
        saveData(levelData);
        console.dir(levelData);
      });
    };

    if (type === 'material') {
      if (name === 'pc') {
        $img.addEventListener('click', () => {
          let run = false;

          const documentListener = e => {
            if (!run) return (run = true);

            const { clientX, clientY } = e;

            const $gameMap = document.querySelector('#game-map');

            const imgStyle1 = `cursor: pointer; position: absolute; top: ${clientY}px; left: ${clientX}px; width: 100px; height: auto; transform: translate(-50%, -50%);`;

            $gameMap.innerHTML += `<img data-type="element" data-name="pc" data-pc="${runPc}" src="/assets/pc.webp" style="${imgStyle1}" />`;

            levelData.levels[level].elements[runPc] = { name: 'pc', ip: '0.0.0.0', mask: '0.0.0.0', gateway: '0.0.0.0', dns: '0.0.0.0', posX: clientX, posY: clientX };
            levelData.levels[level].mats.splice(index, 1);
            saveData(levelData);

            const selfScript = document.querySelector('script[data-level][data-script="3"]');

            const level = selfScript.getAttribute('data-level');

            const { levels } = getData();

            const liStyle = 'list-style: none; height: auto; display: flex; flex-direction: row;';
            const imgStyle = 'cursor: pointer; height: 100%;';
            const spanStyle = '';

            const html = levels[level].mats
              .map(
                mat =>
                  `<li style='${liStyle}'><img data-type="material" data-name="${mat.name}" style='${imgStyle}' src='/assets/${mat.name}.webp' alt='${mat.name}' /><span style='${spanStyle}'></span></li>`
              )
              .join('');

            selfScript.outerHTML = html;

            const $currentImg = document.querySelector(`[data-pc="${runPc}"]`);

            $currentImg.addEventListener('click', pcElementListener);
            runPc++;

            document.removeEventListener('click', documentListener);
          };

          document.addEventListener('click', documentListener);
        });
      }
    } else if (type === 'element') {
      if (name === 'pc') {
        $img.addEventListener('click', pcElementListener);
      }
    }
  });
}
