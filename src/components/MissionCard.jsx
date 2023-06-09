import React from 'react';
import PropTypes from 'prop-types';
import '../Styles.css';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="MissionsCard" data-testid="mission-card" mission_card>
        <p data-testid="mission-name">
          {`Missão: ${name}`}
        </p>
        <p data-testid="mission-year">
          {`Ano: ${year}`}
        </p>
        <p data-testid="mission-country">
          {`País: ${country}`}
        </p>
        <p data-testid="mission-destination">
          {`Destino: ${destination}`}
        </p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
