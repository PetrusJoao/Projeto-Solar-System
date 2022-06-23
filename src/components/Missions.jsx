import React, { Component } from 'react';
import Title from './Title';

class Mission extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
      </div>
    );
  }
}

export default Mission;
