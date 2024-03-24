export const DATA = {
  levels: {
    1: {
      title: 'Conexión entre pares',
      missions: ['Conecta los dos dispositivos'],
      mats: [{ name: 'cable' }],
      elements: [],
      condition: thisLevel => {
        return true;
      },
    },
    2: { title: 'TODO', missions: [], mats: [], elements: [], condition: thisLevel => {} },
    3: { title: 'TODO', missions: [], mats: [], elements: [], condition: thisLevel => {} },
    4: { title: 'TODO', missions: [], mats: [], elements: [], condition: thisLevel => {} },
    5: { title: 'TODO', missions: [], mats: [], elements: [], condition: thisLevel => {} },
    6: { title: 'TODO', missions: [], mats: [], elements: [], condition: thisLevel => {} },
    7: { title: 'TODO', missions: [], mats: [], elements: [], condition: thisLevel => {} },
    8: { title: 'TODO', missions: [], mats: [], elements: [], condition: thisLevel => {} },
    9: { title: 'TODO', missions: [], mats: [], elements: [], condition: thisLevel => {} },
    10: { title: 'TODO', missions: [], mats: [], elements: [], condition: thisLevel => {} },
    11: { title: 'TODO', missions: [], mats: [], elements: [], condition: thisLevel => {} },
    12: { title: 'TODO', missions: [], mats: [], elements: [], condition: thisLevel => {} },
  },
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

export function saveData(data) {
  localStorage.setItem('data', JSON.stringify(data));
}
