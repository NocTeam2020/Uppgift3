import http from '../starwars-api'

const getDataLukeSkywalker = () => {
return http.get('/people/1/')

}

const getStarWarsCharacter = (characterNumber: number) => {
    return http.get(`/people/${characterNumber}`)

}
 

export default {
    getDataLukeSkywalker,
    getStarWarsCharacter
}