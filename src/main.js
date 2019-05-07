/* Manejo del DOM */
const listaPokemones = window.POKEMON.pokemon;
const arrBtn = ['Fire', 'Bug', 'Water', 'Fighting', 'Poison', 'Ground', 'Fairy', 'Rock', 'Ghost', 'Ice', 'Electric', 'Steel', 'Dragon', 'Flying', 'Grass', 'Dark', 'Psychic', 'Normal'];
let datatype= listaPokemones;
let card = '';
let modal = '';
let btnType = '';
let btnWeak = '';
let btnFilters = '';
let buscadorNombre = '';
window.addEventListener('load', function() {
    imprimir(listaPokemones);
    createBtnOfFilters(arrBtn);
});
const imprimir = (arr) => {
    createCards(arr);
    createModal(arr);
    createBtnOfWeak(arr);
    createBtnOfType(arr);
};
const vaciar = () => {
    card = '';
    modal = '';
    btnType = '';
    btnWeak = '';
}
// creamos tarjetas:v          
const createCards = (arr) => {
    arr.forEach((element) => {
        card += `<div class="card">
                    <img class="${element.type[0]}" alt="" class="card-img-top" src=${element.img}>
                    <div class = "card-body">
                        <h5 class = "card-title">
                            ${element.name}
                        </h5>
                        <p class="card-text">
                            Nº${element.num}
                        </p>
                        <a class = "btn btn-primary btn-tarjeta" data-target="#modal${element.id}" data-toggle="modal" href="#">
                        <i class="fas fa-eye"></i> <span class="descripcion">Ver mas:</span>
                        </a>
                    </div>
                </div>`;
    })
    document.getElementById('tarjetas').innerHTML = card;
}
// creamos modales
const createModal = (arr) => {
    arr.forEach((element) => {
        modal += `<div aria-hidden="true" aria-labelledby="exampleModalCenterTitle" class="modal fade" id="modal${element.id}" role="dialog" tabindex="-1">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">
                                    ${element.name} N° ${element.num}
                                </h5>
                                <button aria-label="Close" class="close" data-dismiss="modal" type="button">
                                    <span aria-hidden="true">
                                        ×
                                    </span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="grid">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <img alt="" class="imagen-pokemon" src="${element.img}"/>
                                        </div>
                                        <div class="col-md-8 pokeinfo">
                                            <ul>
                                                <li>
                                                    <i class="fas fa-arrows-alt-v"> <span class="descripcion">Altura:</span>
                                                    </i>
                                                    ${element.height}
                                                </li>
                                                <li>
                                                    <i class="fas fa-weight "> <span class="descripcion">Peso:</span>
                                                    </i>
                                                    ${element.weight}
                                                </li>
                                                <li>
                                                    <i class="fas fa-candy-cane"> <span class="descripcion">Candy:</span>
                                                    </i>
                                                    ${element.candy_count}
                                                </li>
                                                <li>
                                                    <i class="fas fa-egg"> <span class="descripcion">Huevos:</span>
                                                    </i>
                                                    ${element.egg}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p>
                                        evolucion
                                    </p>
                                    <div class="row" id="evoluciones${element.id}">

                                    <div class="col-md-2 offset-md-3 col-sm-2 offset-sm-3">
                                        <p></p>
                                     </div>
                                    </div>
                                    <div>
                                        <p>
                                            tipos
                                        </p>
                                        <div id="type${element.id}">
                                        </div>
                                    </div>
                                    <div>
                                        <p>
                                           debilidades
                                        </p>
                                        <div id= "weak${element.id}"> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
    })
    document.getElementById('modal').innerHTML = modal;
}
// creamos botones de debilidades dentro de modal
const createBtnOfWeak = (arr) => {
    arr.forEach((element) => {
        element.weaknesses.forEach((weakness) => {
            btnWeak += `<button value="${weakness}"  class="btnWeakModal btn btn-primary ${weakness} filter-list" href="#">
                            ${weakness}
                        </button>`;
        });
        document.getElementById(`weak${element.id}`).innerHTML = btnWeak;
        btnWeak = '';
    })
    let x = document.getElementsByClassName('btnWeakModal');
    for (let i = 0; i < x.length; i++) {
        x[i].addEventListener('click', () => {
            let valor = x[i].value;
            let datatype = window.filterWeak(listaPokemones, valor);
            vaciar();
            imprimir(datatype);
        })
    }
}
// creamos botones de tipos dentro de modal
const createBtnOfType = (arr) => {
    arr.forEach((element) => {
        element.type.forEach((element) => {
            btnType += `<button value="${element}" class="btnTypeModal btn btn-primary filter-list ${element}" href="">
                            ${element}
                        </button>`;
        });
        document.getElementById(`type${element.id}`).innerHTML = btnType;
        btnType = '';
    })
    let x = document.getElementsByClassName('btnTypeModal');
    for (let i = 0; i < x.length; i++) {
        x[i].addEventListener('click', () => {
            let valor = x[i].value;
            let datatype = window.filterType(listaPokemones, valor);
            vaciar();
            imprimir(datatype);
        })
    }
}
// crear botones de filtros dinamicamente
const createBtnOfFilters = (arr) => {
    arr.forEach((element) => {
        btnFilters += ` <li id="${element}" value="${element}" class="btn btn-primary filter-list ${element}" href="">
                                            ${element}
                        </li>`;
    })
    document.getElementById('botonesFiltros').innerHTML = btnFilters;
    arr.forEach((element) => {
        document.getElementById(`${element}`).addEventListener('click', () => {
            datatype = window.filterType(listaPokemones, `${element}`);
            vaciar();
            imprimir(datatype);
            let porcentaje = window.percent(datatype);
            document.getElementById('calculo-agregado').innerHTML = `<p>El ${porcentaje}% de los pokemones de la región Kanto son de tipo ${element}.`;
        });
    })
};
let a = document.getElementById('order');
let ordered;
a.addEventListener('change', () => {
    document.getElementById('calculo-agregado').innerHTML = '';
    let option = a.value;
    if (option === 'AZ') {
        ordered = window.sortData(datatype, 'name', 'asc');
    } else if (option === 'ZA') {
        ordered = window.sortData(datatype, 'name', 'desc');
    } else if (option === 'NumUp') {
        ordered = window.sortData(datatype, 'num', 'asc');
    } else if (option === 'NumDown') {
        ordered = window.sortData(datatype, 'num', 'desc');
    }
    vaciar();
    imprimir(ordered);
}, false);
//buscar pokemones por nombre o numero
document.getElementById('btnBuscar').addEventListener("click", (event) => {
    event.preventDefault();
    buscadorNombre = document.getElementById('buscador').value;
    if (isNaN(buscadorNombre) === true) {
        buscadorNombre = MaysPrimera(buscadorNombre.toLowerCase());
        let dataName = window.filterName(listaPokemones, buscadorNombre);
        vaciar();
        imprimir(dataName);
    } else {
        let dataNum = window.filterNum(listaPokemones, buscadorNombre);
        vaciar();
        imprimir(dataNum);
    }
    document.getElementById('buscador').value = '';
    document.getElementById('buscador').focus();
});
//converir primera letra de string en mayuscula
function MaysPrimera(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
//recargar la pagina
document.getElementById('reload').addEventListener('click', () => {
    location.reload();
})

//const nextEvolution = listaPokemones.filter(element => (element.next_evolution));

//imprimir evolution

// const createEvolution = (arr) => {
//     arr.forEach((element) => {
//         element.next_evolution.forEach(element => {
//             nombre = element.name;
//             let dataNombre = window.filterName(listaPokemones, nombre);
//             evolution += `<div class="col-md-2 offset-md-3 col-sm-2 offset-sm-3">
//                <p>${element.name}</p><img src=${dataNombre[0].img}>
//            </div>`
//         });
//         document.getElementById(`evoluciones${element.id}`).innerHTML = evolution;
//         evolution = '';
//     });
// };