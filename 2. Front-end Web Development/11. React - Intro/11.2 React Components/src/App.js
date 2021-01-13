import React from 'react';

import PokemonList from './PokemonList'
import pokemons from './data'

import './App.css';

class App extends React.Component {
  render() {
    return (
      <main className="main-container">
        <PokemonList pokemons={pokemons} />
      </main>
    );
  }
}

export default App;
