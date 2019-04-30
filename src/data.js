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
//
const filterEvolution = (arr, condition) => {
    const arrEvolution = arr.filter(el => {
        return el.next_evolution.includes(condition);
    });
    //console.log(arrType);
    return arrEvolution;
}

//filtramos por nombre
const filterName = (arr, condition) => {
    const arrName = arr.filter(el => {
        return el.name.toLowerCase().includes(condition);
    })
    return arrName;
}
window.filterName = filterName;
//filtrar por id
const filterNum = (arr, condition) => {
    const arrNum = arr.filter(el => {
        return el.num.includes(condition);
    })
    return arrNum;
}
window.filterNum = filterNum;
//oredenar AZ
const orderAZ = (arr) => {
    const ordered = arr.sort((a, b) => {
        if (a.name > b.name) {
            return 1;
        }
        return -1;
    });
};
window.orderAZ = orderAZ;
//ordenar ZA
const orderZA = (arr) => {
    const ordered = arr.sort((a, b) => {
        if (a.name < b.name) {
            return 1;
        }
        return -1;
    });
}
window.orderZA = orderZA;
//oredenar numeros 1-151
const orderNumUp = (arr) => {
    const ordered = arr.sort((a, b) => {
        if (a.num > b.num) {
            return 1;
        }
        return -1;
    });
};
window.orderNumUp = orderNumUp;
//oredenar numeros 151 - 1
const orderNumDown = (arr) => {
    const ordered = arr.sort((a, b) => {
        if (a.num < b.num) {
            return 1;
        }
        return -1;
    });
};
window.orderNumDown = orderNumDown;
