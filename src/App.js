import React from 'react';
import Header from './components/Header';
import Mission from './components/Missions';
import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <Header />
        </div>
        <div className="Galaxy">
          <div className="PlanetsContainer">
            <SolarSystem />
          </div>
          <div className="MissionsContainer">
            <Mission />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
