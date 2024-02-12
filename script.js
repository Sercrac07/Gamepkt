const $resetData = document.getElementById('resetData');
const $modal = document.getElementById('modal');
const $but1 = document.getElementById('but1');
const $but2 = document.getElementById('but2');

$resetData.addEventListener('click', e => {
  $modal.className.includes('show') ? '' : ($modal.className = 'show');
});

$but1.addEventListener('click', e => {
  $modal.className = '';

  localStorage.clear();
});

$but2.addEventListener('click', e => {
  $modal.className = '';
});
