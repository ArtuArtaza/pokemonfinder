
export let State = {pokemonList: [],pokemonPage:"",pokemonSelected:[]}

const setState = (NewState) => {
        State = {...State,...NewState}

        return State
}

export default setState