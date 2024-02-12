const $button = document.getElementById('button');
const $resume = document.getElementById('resume');
const $menu = document.getElementById('menu');
const $mision = document.getElementById('mision');
const $misionGroup = document.getElementsByClassName('mision')[0];

$button.addEventListener('click', () => {
  $menu.className = 'show';
});

$resume.addEventListener('click', () => {
  $menu.className = '';
});

$mision.addEventListener('click', () => {
  if ($misionGroup.className.includes('show')) {
    $misionGroup.className = 'mision';
    $mision.innerHTML = '>';
  } else {
    $misionGroup.className = 'mision show';
    $mision.innerHTML = '<';
  }
}); 

