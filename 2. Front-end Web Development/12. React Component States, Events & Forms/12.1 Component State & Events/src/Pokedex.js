import React from "react";
import Pokemon from "./Pokemon";
import pokeData from './data';

class Pokedex extends React.Component {
  constructor() {
    super();

    this.state = {
      pokedexPosition: 0,
      // pokedexFilter: '',
    };

    this.handleNextClick = this.handleNextClick.bind(this);
    // this.handleFilterClick = this.handleFilerClick.bind(this);
  }

  handleNextClick() {
    let counter = this.state.pokedexPosition > pokeData.length - 2 ?
    this.state.pokedexPosition = -1 : this.state.pokedexPosition;

    this.setState((posicaoAnterior, _props) => ({
      counter: counter,
      pokedexPosition: posicaoAnterior.pokedexPosition + 1,
    }
    ));
  }

  handleFilterClick() {
//teste
  }

  render() {
    return (
      <section>
        <div className="pokedex">
          <Pokemon pokemon={this.props.pokemons[this.state.pokedexPosition]} />
        </div>
        <button onClick={this.handleNextClick}>Próximo Pokémon</button>
        <button onClick={this.handleFilterClick}>Fire</button>
        <button onClick={this.handleFilterClick}>Psychic</button>
      </section>
    );
  }
}

export default Pokedex;
