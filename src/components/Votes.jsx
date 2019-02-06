import React, { Component } from 'react';
import Button from './Button';

class Votes extends Component {
  state = { 
    voteChange: 0,
    votes: null,
  }
  componentDidMount() {
    const { votes } = this.props;
    this.setState({
      votes,
    })
  }
  render() { 
    const { votes } = this.state;
    return ( 
      <span><Button buttonPurpose='Vote up'/><span>{votes}</span><Button buttonPurpose='Vote up'/></span>
    );
  }
}
 
export default Votes
