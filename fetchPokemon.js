import setState,{State} from "/setState.js"

const fetchPokemon = (url) => {
    const loadText = document.getElementById('load')
    loadText.innerText = 'Cargando data...'

    fetch(url).
    then(res => res.json()).
    then(data => {
        setState({pokemonList:data.results})
        loadText.innerText = ''
        }
        )
        
}

export default fetchPokemon

