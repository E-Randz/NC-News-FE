import React, { Component } from 'react';
import Button from './Button';
import { changeVoteCount } from '../api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faThumbsUp, faThumbsDown} from '@fortawesome/free-solid-svg-icons';
// import '../styles/Dashboard.css';
import '../styles/Votes.css';

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
    const { votes, voteChange } = this.state;
    return ( 
      <p className='Votes'>
        <Button disabled={voteChange === 1} handleClick={() => this.handleVoteClick(1)} buttonPurpose={<FontAwesomeIcon onClick={this.toggleModal} icon={faThumbsUp} />}/>
          <span>{votes + voteChange}</span>
        <Button disabled={voteChange === -1} handleClick={() => this.handleVoteClick(-1)} buttonPurpose={<FontAwesomeIcon onClick={this.toggleModal} icon={faThumbsDown} />}/>
      </p>
    );
  }
  
  handleVoteClick = (voteChange) => {
    const { item, comment_article_id } = this.props;
    changeVoteCount(voteChange, item, comment_article_id)
    this.setState(prevProps => {
        return {
          voteChange: prevProps.voteChange + voteChange,
        }
    })
  }
}
 
export default Votes
