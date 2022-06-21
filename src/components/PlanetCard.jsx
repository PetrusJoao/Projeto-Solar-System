import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class PlanetCard extends Component {
  render() {
    const { planetName } = this.props;
    const { planetImage } = this.props;
    return (
      <div data-testid="planet-card" className="PlanetsInfo">
        <p data-testid="planet-name">{ planetName }</p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
