import React, { useState } from 'react'

export default function Input({ setPoke }) {

    const handleClick = e => {
        const value = e.target.previousSibling.value
        setPoke(value)
        e.target.previousSibling.value = ""
    }

    return (
        <div>
            <input type="text" name="pokemon" id="pokemon" placeholder='Enter pokemon name' />
            <button onClick={handleClick}>Catch!</button>
        </div>
    )
}
