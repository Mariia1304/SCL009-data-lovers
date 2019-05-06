/* Manejo de data */
// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
const filterType = (arr, condition) => {
    const arrType = arr.filter(el => {
        return el.type.includes(condition);
    });
    //console.log(arrType);
    return arrType;
}
window.filterType = filterType;

//filtrar por debilidad
const filterWeak = (arr, condition) => {
    const arrWeak = arr.filter(el => {
        return el.weaknesses.includes(condition);
    })
    return arrWeak;
}
window.filterWeak = filterWeak;
//evolution
// array con pokemones que tienen next_evolution
// const nextEvolution = listaPokemones.filter(element => (element.next_evolution));
// window.nextEvolution = nextEvolution;
// const filterEvolution = (arr, condition) => {
//     const arrEvolution = arr.filter(el => {
//         return el.next_evolution;
//     });
//     console.log(arrEvolution);
//     return arrEvolution;
// }
//window.filterEvolution = filterEvolution;
//filtramos por nombre
const filterName = (arr, condition) => {
    const arrName = arr.filter(el => {
        return el.name.includes(condition);
    })
    return arrName;
}
window.filterName = filterName;
//filtrar por Num
const filterNum = (arr, condition) => {
    const arrNum = arr.filter(el => {
        return el.num.includes(condition);
    })
    return arrNum;
}
window.filterNum = filterNum;

const sortData = (data, sortBy, sortOrder) => {
    let arr = [];

    

    if (condition === "AZ") {
        arr = data.sort(orderByName)
    }
    //de z/a
    if (condition === "ZA") {
        arr = data.sort(orderByName).reverse();
    }
    // del 1/151 
    if (condition === "NumUp") {
        arr = data.sort(orderByNum)
    }
    // del 151/1
    if (condition === "NumDown") {
        arr = data.sort(orderByNum).reverse();
    }
    return arr

}

function orderByNum(a, b) {
    if (a.num > b.num) {
        return 1
    }
    return -1;
}

function orderByName(a, b) {
    if (a.name > b.name) {
        return 1
    }
    return -1;
}
window.sortData = sortData;
//calculo agregado
// const data1 = [{
//     name: "Charmander",
//     num: "004",
//     type: ["Fire"]
// }, {
//     name: "Bulbasaur",
//     num: "001",
//     type: ["Grass", "Poison"]
// }, {
//     name: "Squirtle",
//     num: "007",
//     type: ["Water"]
// }]
const percent = (arr) => {
    let result = parseInt(arr.length / 151 * 100);
    return result;
}
window.percent = percent;
// percent(data1);
