const DATA = {
  levels: {
    1: { title: 'Conexión entre pares', missiones: [], materiales: [], elementos: [] },
    2: { title: 'TODO', missiones: [], materiales: [], elementos: [] },
    3: { title: 'TODO', missiones: [], materiales: [], elementos: [] },
    4: { title: 'TODO', missiones: [], materiales: [], elementos: [] },
    5: { title: 'TODO', missiones: [], materiales: [], elementos: [] },
    6: { title: 'TODO', missiones: [], materiales: [], elementos: [] },
    7: { title: 'TODO', missiones: [], materiales: [], elementos: [] },
    8: { title: 'TODO', missiones: [], materiales: [], elementos: [] },
    9: { title: 'TODO', missiones: [], materiales: [], elementos: [] },
    10: { title: 'TODO', missiones: [], materiales: [], elementos: [] },
    11: { title: 'TODO', missiones: [], materiales: [], elementos: [] },
    12: { title: 'TODO', missiones: [], materiales: [], elementos: [] },
  },
  logros: [{ name: 'Conecta 3 dispositivos' }],
};

function createData() {
  localStorage.setItem('data', JSON.stringify(DATA));
  return localStorage.getItem('data');
}

/**
 * @returns {typeof DATA}
 */
export function getData() {
  let data = localStorage.getItem('data');

  if (!data) {
    data = createData();
  }

  return JSON.parse(data);
}

function saveData(data) {
  localStorage.setItem('data', JSON.stringify(data));
}
