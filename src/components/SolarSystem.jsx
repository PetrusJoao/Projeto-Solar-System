import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

const planetName = planets.map((planet) => (
  <PlanetCard
    key={ planet.name }
    planetName={ planet.name }
    planetImage={ planet.image }
  />));

class SolarSystem extends Component {
  render() {
    return (
      <div>
        <div data-testid="solar-system">
          <Title headline="Planetas" />
        </div>
        { planetName }
      </div>
    );
  }
}

export default SolarSystem;
