const $logros = document.getElementById('logros');

let logrosStorage = localStorage.getItem('logros');

if (!logrosStorage) {
  localStorage.setItem(
    'logros',
    `[
      { "name": "Consigue 10 estrellas.", "value": 3, "maxValue": 10, "completed": false },
      { "name": "Consigue 10 estrellas.", "value": 2, "maxValue": 10, "completed": false },
      { "name": "Consigue 15 estrellas.", "value": 0, "maxValue": 15, "completed": false }
    ]`
  );

  logrosStorage = localStorage.getItem('logros');
}

const logrosUser = JSON.parse(logrosStorage);

logrosUser.forEach(logro => {
  $logros.innerHTML += `<li><div style="width: ${
    (logro.value / logro.maxValue) * 100
  }%;"></div><h1>${logro.name}</h1><span>${logro.value} / ${
    logro.maxValue
  }</span></li>`;
});
