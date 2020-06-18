import React from 'react';
import PhaseNames from './data/Phases';

class Phase extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.number > PhaseNames.length) {
      this.state = {number: 1};
    } else {
      this.state = {number: this.props.number};
    }
  }

  render() {
    return <h3>Phase {this.state.number} - {PhaseNames[this.state.number-1]}</h3>;
  }
}

export default Phase;
