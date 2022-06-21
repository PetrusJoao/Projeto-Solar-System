import React, { Component } from 'react';
import Title from './Title';

class SolarSystem extends Component {
  render() {
    return (
      <div>
        <div data-testid="solar-system">Renderizei</div>
        <Title headline="Planetas" />
      </div>
    );
  }
}

export default SolarSystem;
