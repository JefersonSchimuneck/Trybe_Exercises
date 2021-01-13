import React from 'react'
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
    render () {
        const { name, type, averageWeight, image} = this.props.pokemon;

        return (
            <section className="pokemon-card">
              <h3>{name}</h3>
              <div>{type}</div>
              <div>{averageWeight.value + averageWeight.measurementUnit}</div>
              <img src={image} alt="Pokemon Image"/>
            </section>
          )
    }
}

Pokemon.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.number,
      averageWeight: PropTypes.shape({
        value: PropTypes.number,
        measurementUnit: PropTypes.string
      }),
      image: PropTypes.string
    })
  }

export default Pokemon;