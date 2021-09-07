import setState,{State} from "setState.js"
import renderPokemon from "renderPokemon.js"

const filterAndFetch = async (input) => {
    const pokemonSelected = State.pokemonList.filter( element => element.name.includes(input.toLowerCase()))
    const pokePromises = pokemonSelected.map(pokemon => fetch(pokemon.url).
    then(res => res.json()).
    then(pokeData => pokeData))

    Promise.all(pokePromises).
    then(res => {setState({pokemonSelected: res})
    console.log(State);

    renderPokemon()
})
}

export default filterAndFetch
