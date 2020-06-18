import React from 'react';
import PhaseNames from './data/Phases';

class Phase extends React.Component {
  render() {
    return <h3>Phase {this.props.number} - {PhaseNames[this.props.number-1]}</h3>;
  }
}

export default Phase;
