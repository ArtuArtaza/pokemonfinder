import {State } from "./setState.js";
import scrollDown from "./scrollDown.js"
import { mainCont } from "./app.js";

const renderPokemon = () => {
    mainCont.style.display = 'flex'
   const HTML = State.pokemonSelected.map((pokemon,index) => 
        `<div class="f-cont" style="animation-delay:${index * 200}ms">
        <span class="PokeName">Name:${pokemon.name}</span>
        ${pokemon.types.map(type => `<span class="PokeInfo">Type:${type.type.name}</span>`).
        join("")}
        
        <span class="PokeInfo">Weigth: ${pokemon.weight}</span>
        <img class="pokePhoto" src="${pokemon.sprites.front_default}"></img>
        <img class="pokeball" src="./images/pokeball.svg"></img>
        </div>`).join("")

    const div = document.getElementById('main-cont')
    div.innerHTML = HTML;
    //Insertar window.scrollTo(300,500)
    scrollDown();
   
}


export default renderPokemon