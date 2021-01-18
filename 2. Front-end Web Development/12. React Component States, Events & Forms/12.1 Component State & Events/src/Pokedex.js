import React from "react";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  constructor() {
    super();

    this.state = {
      pokedexIndex: 0,
      pokedexFilter: '',
    };

    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleFilterClick = this.handleFilterClick.bind(this);
  }

  handleNextClick() {
    let counter = this.state.pokedexIndex > this.filterPokemon().length -2 ?
    this.state.pokedexIndex = -1 : this.state.pokedexIndex;

    this.setState((previousIndex, _props) => ({
      counter: counter,
      pokedexIndex: previousIndex.pokedexIndex + 1,
    }
    ));
  }

  handleFilterClick(event) {
    this.setState({
      pokedexIndex: 0,
      pokedexFilter: event.target.innerText === 'All' ? '' : event.target.innerText});
  }

  getPokemon() {
    const {pokemons} = this.props;
    return pokemons;
  }

  filterPokemon() {
    const { pokedexFilter } = this.state;
    return this.getPokemon()
    .filter(pokemon => pokemon.type.includes(pokedexFilter))
  }

  render() {
    const { pokedexIndex } = this.state;
    const pokeTypes = [...new Set(this.getPokemon().map(pokemons => pokemons.type))];
    pokeTypes.push('All');

    return (
      <section>
        <div className="pokedex">
          {this.filterPokemon()
            .map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)[pokedexIndex]}
        </div>
        <div className="typeButtons">
          {pokeTypes.map(type => <button key={type} onClick={this.handleFilterClick}>{type}</button>)}
        </div>
        <button onClick={this.handleNextClick}>Next Pokémon</button>
      </section>
    );
  }
}

export default Pokedex;
