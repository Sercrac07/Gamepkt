const $missionButton = document.querySelector('#display-mission');
const $missionList = document.querySelector('#mission');

const $level = document.querySelector('.game-level');
const $options = document.querySelector('.options');
const $return = document.querySelector('#return');

$missionButton.addEventListener('click', () => {
  $missionList.className = `${$missionList.className.includes('show') ? '' : 'show'}`;
  $missionButton.innerHTML = `${$missionList.className.includes('show') ? '<' : '>'}`;
});

$level.addEventListener('click', () => {
  $options.className = `${$options.className.includes('show') ? 'options' : 'options show'}`;
});

$return.addEventListener('click', () => {
  $options.className = `${$options.className.includes('show') ? 'options' : 'options show'}`;
});
