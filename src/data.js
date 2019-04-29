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

const filterEvolution = (arr, condition) => {
    const arrEvolution = arr.filter(el => {
        return el.next_evolution.includes(condition);
    });
    //console.log(arrType);
    return arrEvolution;
}
window.filterType = filterType;
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

