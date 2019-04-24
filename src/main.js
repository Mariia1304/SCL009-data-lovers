/* Manejo del DOM */
const listaPokemones = POKEMON.pokemon;
let card = '';
let modal = '';
//imprimir tarjetas
window.addEventListener('load', function () {
  for (let i = 0; i < listaPokemones.length; i++) {
    card += `<div class="card"><img alt="" class="card-img-top planta-veneno" src=${listaPokemones[i].img}>
        <div class = "card-body"> <h5 class = "card-title">${listaPokemones[i].name}
        </h5><p class="card-text">Nº${listaPokemones[i].num}</p><a class = "btn btn-primary btn-tarjeta" data-target="#${listaPokemones[i].name}" data-toggle="modal" href="#">ver mas</a></div></div>`;
  
        modal += `div aria-hidden="true" aria-labelledby="exampleModalCenterTitle" class="modal fade" id="${listaPokemones[i].name}"role="dialog" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">
        <div class = "card-body"> <h5 class = "card-title">${listaPokemones[i].name} N° ${listaPokemones[i].num}
        
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
              <img alt="" class="imagen-pokemon" src="http://www.serebii.net/pokemongo/pokemon/001.png" />
            </div>
            <div class="col-md-8 pokeinfo">
              <ul>
                <li>
                  <i class="fas fa-arrows-alt-v"></i>
                  0.71 m
                </li>
                <li>
                  <i class="fas fa-weight"></i>
                  6.9 kg
                </li>
                <li>
                  <i class="fas fa-candy-cane"></i>
                  25
                </li>
                <li>
                  <i class="fas fa-egg"></i>
                  2 km
                </li>
              </ul>
            </div>
          </div>
          
          <p>
            evolucion
          </p>
          <div class="row" id="evoluciones">
            <div class="col-md-2 offset-md-3 col-sm-2 offset-sm-3 ">
              <img alt="" class="img-fluid" src="http://www.serebii.net/pokemongo/pokemon/001.png" />
            </div>
            <div class="col-md-2 col-sm-2 ">
              <img alt="" class="img-fluid" src="http://www.serebii.net/pokemongo/pokemon/002.png" />
            </div>
            <div class="col-md-2 col-sm-2 ">
              <img alt="" class="img-fluid" src="http://www.serebii.net/pokemongo/pokemon/003.png" />
            </div>
          </div>
          <div>
            <p>
              tipos
            </p>
            <a class="btn btn-primary fuego" href="">
              Fire
            </a>
            <a class="btn btn-primary hielo" href="#">
              Ice
            </a>
          </div>
          <div>
            <p>
              debilidades
            </p>
            <a class="btn btn-primary fuego" href="#">
              Fire
            </a>
            <a class="btn btn-primary hielo" href="#">
              Ice
            </a>
            <a class="btn btn-primary volador" href="#">
              Flying
            </a>
            <a class="btn btn-primary psiquico" href="#">
              Psychic
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`
  
  
  
      }
  document.getElementById('tarjetas').innerHTML = card;
  document.getElementById('modales').innerHTML = modal;
});

