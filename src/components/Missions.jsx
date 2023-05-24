import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Mission extends Component {
  render() {
    return (
      <div data-testid="missions" className="MissionsContainer">
        <Title headline="Missões" />
        { missions.map((mission) => (<MissionCard
          name={ mission.name }
          year={ mission.year }
          country={ mission.country }
          destination={ mission.destination }
          key={ mission.name }
        />))}
      </div>
    );
  }
}

export default Mission;
