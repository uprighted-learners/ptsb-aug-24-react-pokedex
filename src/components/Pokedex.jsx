import React, { useState, useEffect } from 'react'
import DisplayPokemon from './DisplayPokemon'

export default function Pokedex({ poke }) {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {

        async function getData() {

            setError(null)
            setData(null)

            try {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
                if (!res.ok) {
                    if (res.status === 404) {
                        throw new Error(res.statusText)
                    } else {
                        throw new Error(res.statusText)
                    }
                }

                const d = await res.json()
                setData(d)

            } catch (err) {
                console.error(err)
                setError(err.message)
            }
        }
        // Handles first (initial) useEffect render
        if (poke !== "") getData()
    }, [poke])

    return (
        <div>
            <DisplayPokemon data={data} />
        </div>
    )
}
