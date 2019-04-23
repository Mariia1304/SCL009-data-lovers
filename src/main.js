/* Manejo del DOM */
const listaPokemones = POKEMON.pokemon;
let card = '';
//imprimir tarjetas
window.addEventListener('load', function() {
    for (let i = 0; i < listaPokemones.length; i++) {
        card += `<div class="card" id="${listaPokemones[i].id}"><img alt="" class="card-img-top planta-veneno" src=${listaPokemones[i].img}><div class = "card-body"> <h5 class = "card-title">${listaPokemones[i].name}</h5><p class="card-text">Nº${listaPokemones[i].num}</p><a class = "btn btn-primary btn-tarjeta" data-target="#myModal" data-toggle="modal" href="#">ver mas</a></div></div>`;
    }
    document.getElementById('tarjetas').innerHTML = card;
});