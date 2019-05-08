global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');
const data = [{
    name: "Charmander",
    num: "004",
    type: ["Fire"],
    weaknesses: ["Water", "Ground", "Rock"]
}, {
    name: "Bulbasaur",
    num: "001",
    type: ["Grass", "Poison"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"]
}, {
    name: "Squirtle",
    num: "007",
    type: ["Water"],
    weaknesses: ["Electric", "Grass"]
}]
describe('filterType', () => {
    it('debería ser una función', () => {
        assert.equal(typeof filterType, 'function');
    });
    it('deberia retornar objeto Bulbasaur al filtrar por tipo Grass', () => {
        assert.deepEqual(window.filterType(data, 'Grass'), [{
            name: "Bulbasaur",
            num: "001",
            type: ["Grass", "Poison"],
            weaknesses: ["Fire", "Ice", "Flying", "Psychic"]
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
            weaknesses: ["Fire", "Ice", "Flying", "Psychic"]
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
            type: ["Grass", "Poison"],
            weaknesses: ["Fire", "Ice", "Flying", "Psychic"]
        }])
    });
});
describe('filterWeak', () => {
    it('debería ser una función', () => {
        assert.equal(typeof filterWeak, 'function');
    });
    it('deberia retornar objeto Squirtle al filtrar por debilidad Grass', () => {
        assert.deepEqual(window.filterWeak(data, 'Grass'), [{
            name: "Squirtle",
            num: "007",
            type: ["Water"],
            weaknesses: ["Electric", "Grass"]
        }])
    });
});
describe('sortData', () => {
    it('debería ser una función', () => {
        assert.equal(typeof sortData, 'function');
    });
    it('deberia retornar objetos Bulbasaur, Charmander, Squirtle al ordenar de la A a la Z', () => {
        assert.deepEqual(window.sortData(data, 'name', 'asc'), [{
            name: "Bulbasaur",
            num: "001",
            type: ["Grass", "Poison"],
            weaknesses: ["Fire", "Ice", "Flying", "Psychic"]
        }, {
            name: "Charmander",
            num: "004",
            type: ["Fire"],
            weaknesses: ["Water", "Ground", "Rock"]
        }, {
            name: "Squirtle",
            num: "007",
            type: ["Water"],
            weaknesses: ["Electric", "Grass"]
        }])
    });
    it('debería retornar objetos Squirtle, Charmander,Bulbasaur al ordenar de la Z a la A', () => {
        assert.deepEqual(window.sortData(data, 'name', 'desc'), [{
            name: "Squirtle",
            num: "007",
            type: ["Water"],
            weaknesses: ["Electric", "Grass"]
        }, {
            name: "Charmander",
            num: "004",
            type: ["Fire"],
            weaknesses: ["Water", "Ground", "Rock"]
        }, {
            name: "Bulbasaur",
            num: "001",
            type: ["Grass", "Poison"],
            weaknesses: ["Fire", "Ice", "Flying", "Psychic"]
        }])
    });
    it('deberia retornar objetos Bulbasaur, Charmander, Squirtle al ordenar de 001 a 007', () => {
        assert.deepEqual(window.sortData(data, 'num', 'asc'), [{
            name: "Bulbasaur",
            num: "001",
            type: ["Grass", "Poison"],
            weaknesses: ["Fire", "Ice", "Flying", "Psychic"]
        }, {
            name: "Charmander",
            num: "004",
            type: ["Fire"],
            weaknesses: ["Water", "Ground", "Rock"]
        }, {
            name: "Squirtle",
            num: "007",
            type: ["Water"],
            weaknesses: ["Electric", "Grass"]
        }])
    });
    it('deberia retornar objetos  Squirtle, Charmander,Bulbasaur al ordenar de 7 a 1', () => {
        assert.deepEqual(window.sortData(data, 'num', 'desc'), [{
            name: "Squirtle",
            num: "007",
            type: ["Water"],
            weaknesses: ["Electric", "Grass"]
        }, {
            name: "Charmander",
            num: "004",
            type: ["Fire"],
            weaknesses: ["Water", "Ground", "Rock"]
        }, {
            name: "Bulbasaur",
            num: "001",
            type: ["Grass", "Poison"],
            weaknesses: ["Fire", "Ice", "Flying", "Psychic"]
        }])
    });
});
describe('percent', () => {
    it('debería ser una función', () => {
        assert.equal(typeof percent, 'function');
    });
    it('deberia retornar "El 1% de los pokemones de la región Kanto son de tipo Grass."', () => {
        assert.deepEqual(window.percent(data), 1)
    });
});