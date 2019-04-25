/* Manejo del DOM */
const listaPokemones = POKEMON.pokemon;
let card = '';
let modal = '';
let btnType = '';
let btnWeak = '';
window.addEventListener('load', function() {
    createCards(listaPokemones);
    createModal(listaPokemones);
    createBtnOfWeak(listaPokemones);
    createBtnOfType(listaPokemones);
});
//filtrar por tipo
const arrNew = (arr) => {
    const result = arr.filter(element => {
        for (let i = 0; i < element.type.length; i++) {
            return element.type[i] === 'Fire';
        }
        //return element.type === 'Fire';
    })
    console.log(result);
    return result;
}
arrNew(listaPokemones)
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
        document.getElementById(`type${element.id}`).innerHTML = btnType;
        btnType = '';
    })
}