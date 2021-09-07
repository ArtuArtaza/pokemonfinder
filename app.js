import fetchPokemon from "/fetchPokemon.js"
import {State} from "/setState.js"
import filterAndFetch from "/filterAndFetch.js"


let url = 'https://pokeapi.co/api/v2/pokemon?limit=1118'
const input = document.getElementById('input');
export const mainCont = document.getElementById('main-cont')

mainCont.style.display = 'none'

fetchPokemon(url) 

const find = () => {
    if(input.value.length <= 3)
    {
        return
    }
    filterAndFetch(input.value);
    
    
}


window.find = find
