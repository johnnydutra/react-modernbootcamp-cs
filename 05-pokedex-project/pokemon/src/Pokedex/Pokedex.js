import React, { Component } from 'react';
import Pokecard from '../Pokecard/Pokecard';
import './Pokedex.css'

class Pokedex extends Component {
    
    render() {
        const { pokemon, totalExp, isWinner } = this.props;
        let title;

        if (isWinner) {
            title = <h1 className="Pokedex-winner">Winning Hand</h1>;
        } else {
            title = <h1 className="Pokedex-loser">Losing Hand</h1>;
        }

        return (
            <div className="Pokedex">
                {title}
                <h4>Total Experience: {totalExp}</h4>
                <div className="Pokedex-cards">
                    {pokemon.map((p) => (
                        <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Pokedex;