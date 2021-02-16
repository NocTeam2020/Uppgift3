import http from '../pokemon-api'

const getDataBulbasaur = () => {
    return http.get('/pokemon/1')
}

const getPokemonCharacter = (characterNumber: number) => {
    return http.get(`/pokemon/${characterNumber}`)
}

export default {
    getDataBulbasaur,
    getPokemonCharacter
}