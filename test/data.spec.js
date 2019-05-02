global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

const data = [{
    name: "Charmander",
    num: "004",
    type: ["Fire"]

  },
  {
    name: "Bulbasaur",
    num: "001",
    type: ["Grass", "Poison"]
  },
  {
    name: "Squirtle",
    num: "007",
    type: ["Water"]

  }
]

describe('filterType', () => {

  it('debería ser una función', () => {
    assert.equal(typeof filterType, 'function');
  });
  it('deberia retornar objeto Bulbasaur al filtrar por tipo Grass', () => {
    assert.deepEqual(window.filterType(data, 'Grass'), [{
      name: "Bulbasaur",
      num: "001",
      type: ["Grass", "Poison"],
    }])
  });
});

describe('filterNum', () => {

  it('debería ser una función', () => {
    assert.equal(typeof filterNum, 'function');
  });
  it('deberia retornar objeto Bulbasaur al filtrar por numero 001', () => {
    assert.deepEqual(window.filterNum(data, '001'), [{
      name: "Bulbasaur",
      num: "001",
      type: ["Grass", "Poison"],
    }])
  });
});

describe('filterName', () => {

  it('debería ser una función', () => {
    assert.equal(typeof filterName, 'function');
  });
  it('deberia retornar objeto Bulbasaur al filtrar por nombre Bulbasaur', () => {
    assert.deepEqual(window.filterName(data, 'Bulbasaur'), [{
      name: "Bulbasaur",
      num: "001",
      type: ["Grass", "Poison"]
    }])
  });
});

describe('orderAZ', () => {

  it('debería ser una función', () => {
    assert.equal(typeof orderAZ, 'function');
  });
  it('deberia retornar objeto Bulbasaur, Charmander, Squirtle al seleccione ordenar de la A a la Z', () => {
    assert.deepEqual(window.orderAZ(data, 'a.name > b.name'), [{
      name: "Bulbasaur",
      num: "001",
      type: ["Grass", "Poison"]
    }, {
      name: "Charmander",
      num: "004",
      type: ["Fire"]
    }, {
      name: "Squirtle",
      num: "007",
      type: ["Water"]
    }])
  })
});

// describe('orderZA', () => {

//   it('debería ser una función', () => {
//     assert.equal(typeof orderAZ, 'function');
//   });
//   it('deberia retornar objeto Squirtle, Charmander, Bulbasaur al ordenar de la Z a la A', () => {
//     assert.deepEqual(window.orderZA(data), [{
//       name: "Squirtle"
//     }, {
//       name: "Charmander"
//     }, {
//       name: "Bulbasaur"
//     }])
//   })
// });

// describe('orderNumUp', () => {

//   it('debería ser una función', () => {
//     assert.equal(typeof orderNumUp, 'function');
//   });
//   it('deberia retornar objeto Bulbasaur, Charmander, Squirtle  al ordenar del 1 al 151', () => {
//     assert.deepEqual(window.orderNumUp(data), [{
//       name: "Bulbasaur"
//     }, {
//       name: "Charmander"
//     }, {
//       name: "Squirtle"
//     }])
//   })
// });

// describe('orderNumDown', () => {

//   it('debería ser una función', () => {
//     assert.equal(typeof orderNumDown, 'function');
//   });
//   it('deberia retornar objeto Squirtle, Charmander, Bulbasaur al ordenar del 151 al 1', () => {
//     assert.deepEqual(window.orderNumDown(data), [{
//       name: "Squirtle"
//     }, {
//       name: "Charmander"
//     }, {
//       name: "Bulbasaur"
//     }])
//   })
// });

