import React from 'react';
import Header from './components/Header';
import Mission from './components/Missions';
import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <div className="Galaxy">
        <div>
          <Header />
        </div>
        <div className="PlanetsContainer">
          <SolarSystem />
        </div>
        <div className="MissionsContainer">
          <Mission />
        </div>
      </div>
    );
  }
}

export default App;
