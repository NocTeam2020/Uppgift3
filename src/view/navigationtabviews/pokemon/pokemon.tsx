import { useState, useEffect } from 'react'
import pokemonApiService from '../../../shared/api/pokemon-api-service/pokemon-api-service'

export const PokemonView = () => {
    const [pokemonData, setStartData] = useState<any>()
    const [count, setCount] = useState(1)

    const makeSureCountWillNeverGoBelowValue1 = () => {
        (count <= 1) ? setCount(1) : setCount(count - 1)
    }

    const getDataFromPokemonAPI = async () => {
        try {
            const response = await pokemonApiService.getPokemonCharacter(count)
            setStartData(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getDataFromPokemonAPI()
    }, [count])

    return (
        <div>
            <h1>This is the Pokemon view</h1>
            <h3>Name: {pokemonData?.data?.name}</h3>
            <h3>Species: {pokemonData?.data?.species?.name}</h3>
            <h3>Order: {pokemonData?.data?.order}</h3>
            <h3>Height: {pokemonData?.data?.height}</h3>
            <button onClick={() => makeSureCountWillNeverGoBelowValue1()}>Get previous pokemon:</button>
            <button onClick={() => setCount(count + 1)}>Get next pokemon:</button>
        </div>
    )
}
