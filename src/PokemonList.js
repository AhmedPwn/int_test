import React from 'react'
console.log('test')
export default function PokemonList({pokemon}) {
    return (
        <div>
            
            {pokemon.map(p=> (
                <div key={p}> {p}</div>
                )
            )}
        </div>
    )
}
