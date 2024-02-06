const $resetData = document.getElementById('resetData');
const $modal = document.getElementById('modal');
const $modal1 = document.getElementById('modal1');
const $but1 = document.getElementById('but1');
const $but2 = document.getElementById('but2');

$resetData.addEventListener('click', e => {
  $modal.className.includes('show') ? '' : ($modal.className = 'show');
  $modal1.className.includes('show') ? '' : ($modal1.className = 'show');
});

$but1.addEventListener('click', e => {
  $modal.className = '';
  $modal1.className = '';

  localStorage.clear();
});

$but2.addEventListener('click', e => {
  $modal.className = '';
  $modal1.className = '';
});
