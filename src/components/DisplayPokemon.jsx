import React from 'react'
import PropTypes from 'prop-types'

export default function DisplayPokemon({ data }) {
    return (
        <>
            {console.log(data)}
            <h1>Name: {data.name}</h1>
            <h2>Weight: {data.weight}</h2>
            {data.stats.map((i, index) => <p key={index}>{i.stat.name}: {i.base_stat}</p>)}
            <img src={data.sprites.front_shiny} alt="" />
        </>
    )
}

DisplayPokemon.propTypes = {
    data: PropTypes.array,
    name: PropTypes.string,
    weight: PropTypes.number
}
