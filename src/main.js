/* Manejo del DOM */

const listaPokemones = POKEMON.pokemon;

let card = '';

let modal = '';

window.addEventListener('load', function() {

    //imprimir tarjetas y modales

    for (let i = 0; i < listaPokemones.length; i++) {

        card += `<div class="card" id="${listaPokemones[i].id}"><img alt="" class="card-img-top planta-veneno" src=${listaPokemones[i].img}><div class = "card-body"> <h5 class = "card-title">${listaPokemones[i].name}</h5><p class="card-text">Nº${listaPokemones[i].num}</p><a class = "btn btn-primary btn-tarjeta" data-target="#${listaPokemones[i].name}" data-toggle="modal" href="#">ver mas</a></div></div>`;

        modal += `<div aria-hidden="true" aria-labelledby="exampleModalCenterTitle" class="modal fade" id="${listaPokemones[i].name}" role="dialog" tabindex="-1">

        <div class="modal-dialog modal-dialog-centered" role="document">

            <div class="modal-content">

                <div class="modal-header">

                    <h5 class="modal-title" id="exampleModalLongTitle">

                        ${listaPokemones[i].name} N° ${listaPokemones[i].num}

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

                                <img alt="" class="imagen-pokemon" src="${listaPokemones[i].img}"/>

                            </div>

                            <div class="col-md-8 pokeinfo">

                                <ul>

                                    <li>

                                        <i class="fas fa-arrows-alt-v">

                                        </i>

                                        ${listaPokemones[i].height}

                                    </li>

                                    <li>

                                        <i class="fas fa-weight">

                                        </i>

                                        ${listaPokemones[i].weight}

                                    </li>

                                    <li>

                                        <i class="fas fa-candy-cane">

                                        </i>

                                        ${listaPokemones[i].candy_count}

                                    </li>

                                    <li>

                                        <i class="fas fa-egg">

                                        </i>

                                        ${listaPokemones[i].egg}

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

                            <div id="btn-type">

                            

                            </div>

                        </div>

                        <div>

                            <p>

                                debilidades

                            </p>

                           

                            <a class="btn btn-primary ${listaPokemones[i].weaknesses[0]}" href="#">

                                 ${listaPokemones[i].weaknesses[0]}

                            </a>

                            <a class="btn btn-primary ${listaPokemones[i].weaknesses[1]}" href="#">

                                ${listaPokemones[i].weaknesses[1]}

                            </a>

                            <a class="btn btn-primary ${listaPokemones[i].weaknesses[2]}" href="#">

                                ${listaPokemones[i].weaknesses[2]}

                            </a>

                            <a class="btn btn-primary ${listaPokemones[i].weaknesses[3]}" href="#">

                                ${listaPokemones[i].weaknesses[3]}

                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>`

        // for (let x = 0; x < listaPokemones[i].type.length; x++) {

        //     btnType += `<a class="btn btn-primary ${listaPokemones[i].type[x]}" href="#">

        //                          ${listaPokemones[i].type[x]}

        //                     </a>`

        // }

    }

    document.getElementById('tarjetas').innerHTML = card;

    document.getElementById('modal').innerHTML = modal;

});

