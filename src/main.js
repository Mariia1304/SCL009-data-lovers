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
    for (let i = 0; i < arr.length; i++) {
        card += `<div class="card">
        			<img class=""alt="" class="card-img-top" src=${arr[i].img}>
        			<div class = "card-body">
         				<h5 class = "card-title">
         					${arr[i].name}
         				</h5>
         				<p class="card-text">
         					Nº${arr[i].num}
         				</p>
         				<a class = "btn btn-primary btn-tarjeta" data-target="#${arr[i].name}" data-toggle="modal" href="#">
         				ver mas
         				</a>
         			</div>
         		</div>`;
    }
    document.getElementById('tarjetas').innerHTML = card;
}
// creamos modales
const createModal = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        modal += `<div aria-hidden="true" aria-labelledby="exampleModalCenterTitle" class="modal fade" id="${arr[i].name}" role="dialog" tabindex="-1">
			        <div class="modal-dialog modal-dialog-centered" role="document">
			            <div class="modal-content">
			                <div class="modal-header">
			                    <h5 class="modal-title" id="exampleModalLongTitle">
			                        ${arr[i].name} N° ${arr[i].num}
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
			                                <img alt="" class="imagen-pokemon" src="${arr[i].img}"/>
			                            </div>
			                            <div class="col-md-8 pokeinfo">
			                                <ul>
			                                    <li>
			                                        <i class="fas fa-arrows-alt-v">
			                                        </i>
			                                        ${arr[i].height}
			                                    </li>
			                                    <li>
			                                        <i class="fas fa-weight">
			                                        </i>
			                                        ${arr[i].weight}
			                                    </li>
			                                    <li>
			                                        <i class="fas fa-candy-cane">
			                                        </i>
			                                        ${arr[i].candy_count}
			                                    </li>
			                                    <li>
			                                        <i class="fas fa-egg">
			                                        </i>
			                                        ${arr[i].egg}
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
			                            <div id="type${arr[i].id}">
			                            </div>
			                        </div>
			                        <div>
			                            <p>
			                               debilidades
			                            </p>
										<div id= "weak${arr[i].id}"> 
										</div>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
    			</div>`
    }
    document.getElementById('modal').innerHTML = modal;
}
// creamos botones de debilidades dentro de modal
const createBtnOfWeak = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let x = 0; x < arr[i].weaknesses.length; x++) {
            btnWeak += `<a class="btn btn-primary ${arr[i].weaknesses[x]}" href="#">
                            ${arr[i].weaknesses[x]}
                        </a>`;
        }
        document.getElementById(`weak${arr[i].id}`).innerHTML = btnWeak;
        btnWeak = '';
    }
}
// creamos botones de tipos dentro de modal
const createBtnOfType = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let x = 0; x < arr[i].type.length; x++) {
            btnWeak += `<a class="btn btn-primary ${arr[i].type[x]}" href="#">
                            ${arr[i].type[x]}
                        </a>`;
        }
        document.getElementById(`type${arr[i].id}`).innerHTML = btnWeak;
        btnWeak = '';
    }
}