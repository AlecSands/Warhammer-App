import React from 'react';

class Phase extends React.Component {
  render() {
    return <h3>Phase {this.props.number} - {this.props.name}</h3>;
  }
}

export default Phase;
