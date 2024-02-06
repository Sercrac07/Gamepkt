const $logros = document.getElementById('logros');

let logrosStorage = localStorage.getItem('logros');

if (!logrosStorage) {
  localStorage.setItem(
    'logros',
    `[
      { "name": "Consigue 10 estrellas.", "value": 0, "maxValue": 10, "completed": false },
      { "name": "Consigue 15 estrellas.", "value": 0, "maxValue": 15, "completed": false }
    ]`
  );

  logrosStorage = localStorage.getItem('logros');
}

const logrosUser = JSON.parse(logrosStorage);

logrosUser.forEach((logro, index) => {
  $logros.innerHTML += `<div><h1>${logro.name}</h1></div><hr style="width: ${
    (logro.value / logro.maxValue) * 100
  }%" />`;
});
