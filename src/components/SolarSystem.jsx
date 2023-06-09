import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

const renderPlanet = planets.map((planet) => (
  <PlanetCard
    key={ planet.name }
    planetName={ planet.name }
    planetImage={ planet.image }
  />
));

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system" className="solar-system">
        <Title headline="Planetas" />
        <div className="solar-system-render_planets">
          {renderPlanet}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
