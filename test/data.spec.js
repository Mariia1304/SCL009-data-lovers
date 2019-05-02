global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');
const data = [{
    name: "Charmander",
    type: ["Fire"],
    weaknesses: ["Water", "Ground", "Rock"]
}, {
    name: "Bulbasaur",
    type: ["Grass", "Poison"],
    weaknesses: ["Fire", "Ice", "Flying", "Physics"]
}, {
    name: "Squirtle",
    type: ["Water"],
    weaknesses: ["Electric", "Grass"]
}]
describe('filterType', () => {
    it('debería ser una función', () => {
        assert.equal(typeof filterType, 'function');
    });
    it('debería retornar objeto "Bulbasaur" al filtrar por tipo Grass', () => {
        assert.deepEqual(window.filterType(data, 'Grass'), [{
            name: "Bulbasaur",
            type: ["Grass", "Poison"],
            weaknesses: ["Fire", "Ice", "Flying", "Physics"]
        }])
    });
});
describe('orderAZ', () => {
    it('debería ser una función', () => {
        assert.equal(typeof orderAZ, 'function');
    });
    it('debería retornar objetos "Bulbasaur", "Charmander","Squirtle" al ordenar de la A a la Z', () => {
        assert.deepEqual(window.orderAZ(data), [{
            name: "Bulbasaur",
            type: ["Grass", "Poison"],
            weaknesses: ["Fire", "Ice", "Flying", "Physics"]
        }, {
            name: "Charmander",
            type: ["Fire"],
            weaknesses: ["Water", "Ground", "Rock"]
        }, {
            name: "Squirtle",
            type: ["Water"],
            weaknesses: ["Electric", "Grass"]
        }])
    });
});