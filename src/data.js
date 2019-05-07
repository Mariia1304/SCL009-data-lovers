/* Manejo de data */
const filterType = (arr, condition) => {
    const arrType = arr.filter(el => {
        return el.type.includes(condition);
    });
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
//evolicion
const nextEvolution = (arr) => {
    const arrEvolution = arr.filter(el => el.next_evolution);
    return arrEvolution;
}
window.nextEvolution = nextEvolution;
// evolution
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
// ordenar data
const sortData = (data, sortBy, sortOrden) => {
    return data.sort((a, b) => {
        let x = a[sortBy],
            y = b[sortBy];
        if (sortOrden === 'asc') {
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }
        if (sortOrden === 'desc') {
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        }
    });
}
window.sortData = sortData;
//calculo agregado
const percent = (arr) => {
    let result = parseInt(arr.length / 151 * 100);
    return result;
}
window.percent = percent;