import React from 'react'

import { useState, useEffect } from 'react'
import starwarsApiService from '../../../shared/api/starwars-api-service/starwars-api-service'

export const StarWarsView = () => {
    const [starwarsData, setStartData] = useState<any>()
    const [count, setCount] = useState(1)

    const makeSureCountWillNeverGoBelowValue1 = () => {
        (count <= 1) ? setCount(1) : setCount(count - 1)
    }

    const getDataFromStarWarsAPI = async () => {
        try {
            const response = await starwarsApiService.getStarWarsCharacter(count)
            setStartData(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getDataFromStarWarsAPI()
    }, [count])

    return (
        <div>
            <h1>This is the Starwars view</h1>
            <h3>Name: {starwarsData?.data?.name}</h3>
            <h3>Haircolor: {starwarsData?.data?.hair_color}</h3>
            <h3>Gender: {starwarsData?.data?.gender}</h3>
            <h3>Birth year: {starwarsData?.data?.birth_year}</h3>
            <h3>Height: {starwarsData?.data?.height}</h3>
            <button onClick={() => makeSureCountWillNeverGoBelowValue1()}>Get previous character:</button>
            <button onClick={() => setCount(count + 1)}>Get next character:</button>
        </div>
    )
}
