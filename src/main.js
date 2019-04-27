/* Manejo del DOM */
const listaPokemones = POKEMON.pokemon;
const arrBtn = ['Fire', 'Bug', 'Water', 'Fighting', 'Poison', 'Ground', 'Fairy', 'Rock', 'Ghost', 'Ice', 'Electric', 'Steel', 'Dragon', 'Flying', 'Grass', 'Dark', 'Psychic', 'Normal'];
let card = '';
let modal = '';
let btnType = '';
let btnWeak = '';
<<<<<<< HEAD
let btnFilters = '';
=======
>>>>>>> ffccfb0a22ba4c73ae7d75f26e032a94661e8e16
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
// creamos tarjetas:
const createCards = (arr) => {
    arr.forEach((element) => {
        card += `<div class="card">
                    <img class=""alt="" class="card-img-top" src=${element.img}>
                    <div class = "card-body">
                        <h5 class = "card-title">
                            ${element.name}
                        </h5>
                        <p class="card-text">
                            Nº${element.num}
                        </p>
                        <a class = "btn btn-primary btn-tarjeta" data-target="#${element.name}" data-toggle="modal" href="#">
                        ver mas
                        </a>
                    </div>
                </div>`;
    })
    document.getElementById('tarjetas').innerHTML = card;
}
// creamos modales
const createModal = (arr) => {
    arr.forEach((element) => {
        modal += `<div aria-hidden="true" aria-labelledby="exampleModalCenterTitle" class="modal fade" id="${element.name}" role="dialog" tabindex="-1">
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
                                                    <i class="fas fa-arrows-alt-v">
                                                    </i>
                                                    ${element.height}
                                                </li>
                                                <li>
                                                    <i class="fas fa-weight">
                                                    </i>
                                                    ${element.weight}
                                                </li>
                                                <li>
                                                    <i class="fas fa-candy-cane">
                                                    </i>
                                                    ${element.candy_count}
                                                </li>
                                                <li>
                                                    <i class="fas fa-egg">
                                                    </i>
                                                    ${element.egg}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p>
                                        evolucion
                                    </p>
                                    <div class="row" id="evoluciones">
                                        <div class="col-md-2 offset-md-3 col-sm-2 offset-sm-3">
                                            <img alt="" class="img-fluid" src="http://www.serebii.net/pokemongo/pokemon/001.png"/>
                                        </div>
                                        <div class="col-md-2 col-sm-2 ">
                                            <img alt="" class="img-fluid" src="http://www.serebii.net/pokemongo/pokemon/002.png"/>
                                        </div>
                                        <div class="col-md-2 col-sm-2 ">
                                            <img alt="" class="img-fluid" src="http://www.serebii.net/pokemongo/pokemon/003.png"/>
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
            btnWeak += `<a class="btn btn-primary ${weakness}" href="#">
                            ${weakness}
                        </a>`;
        });
        document.getElementById(`weak${element.id}`).innerHTML = btnWeak;
        btnWeak = '';
    })
}
// creamos botones de tipos dentro de modal
const createBtnOfType = (arr) => {
    arr.forEach((element) => {
        element.type.forEach((element) => {
            btnType += `<a class="btn btn-primary ${element}" href="#">
                            ${element}
                        </a>`;
        });
        document.getElementById(`type${element.id}`).innerHTML += btnType;
        btnType = '';
    })
}
//ordenar con evento del DOM
let a = document.getElementById('orderType');
a.addEventListener('change', function() {
    let option = a.value;
    if (option === 'AZ') {
        window.orderAZ(listaPokemones);
        vaciar();
        imprimir(listaPokemones);
    } else if (option === 'ZA') {
        window.orderZA(listaPokemones);
        vaciar();
        imprimir(listaPokemones);
    }
}, false);
<<<<<<< HEAD
//oredenar AZ
const ordenarAZ = (arr) => {
    let ordered = arr.sort((a, b) => {
        if (a.name > b.name) {
            return 1;
        }
        return -1;
    });
};
//ordenarAZ(listaPokemones);
//ordenar ZA
const ordenarZA = (arr) => {
    let ordered = arr.sort((a, b) => {
        if (a.name < b.name) {
            return 1;
        }
        return -1;
    });
}








//filtrar por tipo
// let result = [];
// const arrFire = (arr) => {
//     result = arr.filter(element => {
//         for (let i = 0; i < element.type.length; i++) {
//             return element.type[i] === 'Fire';
//         }
//     })
//     return result;
// }
// let arrType = [];
// const filterType = (arr, condition) => {
//     arrType = arr.filter(el => {
//         return el.type.includes(condition);
//     })
//     //console.log(arrType);
//     return arrType;
// }
//filterType(listaPokemones, 'Fire');
// arrBtn = ['Fire', 'Bug', 'Water', 'Fighting', 'Poison', 'Ground', 'Fairy', 'Rock', 'Ghost', 'Ice', 'Electric', 'Steel', 'Dragon', 'Flying', 'Grass', 'Dark', 'Psychic', 'Normal'];
// const createBtnOfFilters = (arr) => {
//     arr.forEach((element) => {
//         btnFilters += ` <li id="${element}" value="${element}" class="btn filter-list ${element}" href="">
//                                             ${element}
//                         </li>`
//     })
//     document.getElementById('botonesFiltros').innerHTML = btnFilters;
// }
/*document.getElementById('btnType.value').addEventListener('click', () => {
    let datatype = window.filterType(listaPokemones, 'btnType.value');
    vaciar();
    imprimir(datatype);
});
/*document.getElementById('Bug').addEventListener('click', () => {
    let datatype = window.filterType(listaPokemones, 'Bug');
    vaciar();
    imprimir(datatype);
});
document.getElementById('Water').addEventListener('click', () => {
    let datatype = window.filterType(listaPokemones, 'Water');
    vaciar();
    imprimir(datatype);
});
document.getElementById('Electric').addEventListener('click', () => {
    let datatype = window.filterType(listaPokemones, 'Electric');
    vaciar();
    imprimir(datatype);
});
document.getElementById('Grass').addEventListener('click', () => {
    let datatype = window.filterType(listaPokemones, 'Grass');
    vaciar();
    imprimir(datatype);
});
document.getElementById('Poison').addEventListener('click', () => {
    let datatype = window.filterType(listaPokemones, 'Poison');
    vaciar();
    imprimir(datatype);
});
document.getElementById('Ghost').addEventListener('click', () => {
    let datatype = window.filterType(listaPokemones, 'Ghost');
    vaciar();
    imprimir(datatype);
});
document.getElementById('Rock').addEventListener('click', () => {
    let datatype = window.filterType(listaPokemones, 'Rock');
    vaciar();
    imprimir(datatype);
});
document.getElementById('Steel').addEventListener('click', () => {
    let datatype = window.filterType(listaPokemones, 'Steel');
    vaciar();
    imprimir(datatype);
});
document.getElementById('Flying').addEventListener('click', () => {
    let datatype = window.filterType(listaPokemones, 'Flying');
    vaciar();
    imprimir(datatype);
});
document.getElementById('Fighting').addEventListener('click', () => {
    let datatype = window.filterType(listaPokemones, 'Fighting');
    vaciar();
    imprimir(datatype);
});
document.getElementById('Fairy').addEventListener('click', () => {
    let datatype = window.filterType(listaPokemones, 'Fairy');
    vaciar();
    imprimir(datatype);
});
document.getElementById('Psychic').addEventListener('click', () => {
    let datatype = window.filterType(listaPokemones, 'Psychic');
    vaciar();
    imprimir(datatype);
});
document.getElementById('Ground').addEventListener('click', () => {
    let datatype = window.filterType(listaPokemones, 'Ground');
    vaciar();
    imprimir(datatype);
});
document.getElementById('Electric').addEventListener('click', () => {
    let datatype = window.filterType(listaPokemones, 'Electric');
    vaciar();
    imprimir(datatype);
});
document.getElementById('Electric').addEventListener('click', () => {
    let datatype = window.filterType(listaPokemones, 'Electric');
    vaciar();
    imprimir(datatype);
});
document.getElementById('Ice').addEventListener('click', () => {
    let datatype = window.filterType(listaPokemones, 'Ice');
    vaciar();
    imprimir(datatype);
});
document.getElementById('Dark').addEventListener('click', () => {
    let datatype = window.filterType(listaPokemones, 'Dark');
    vaciar();
    imprimir(datatype);
});
document.getElementById('Normal').addEventListener('click', () => {
    let datatype = window.filterType(listaPokemones, 'Normal');
    vaciar();
    imprimir(datatype);
});
document.getElementById('Dragon').addEventListener('click', () => {
    let datatype = window.filterType(listaPokemones, 'Dragon');
    vaciar();
    imprimir(datatype);
});*/
=======

const createBtnOfFilters = (arr) => {
    arr.forEach((element) => {
        btnFilters += ` <li id="${element}" value="${element}" class="btn filter-list ${element}" href="">
                                            ${element}
                        </li>`;
    })
    document.getElementById('botonesFiltros').innerHTML = btnFilters;
    arr.forEach((element) => {
        document.getElementById(`${element}`).addEventListener('click', () => {
            let datatype = window.filterType(listaPokemones, `${element}`);
            vaciar();
            imprimir(datatype);
        });
    })
}
>>>>>>> ffccfb0a22ba4c73ae7d75f26e032a94661e8e16
