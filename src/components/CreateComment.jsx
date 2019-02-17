import React, { Component } from 'react';
import Button from './Button';
import'../styles/CreateComment.css';
import PropTypes from 'prop-types';

class CreateComment extends Component {
  state = { 
    body: '',
  }

  render() { 
    const { body } = this.state;
    const { handleSubmit } = this.props;
    return ( 
      <div className='Create-comment'>
      <form onSubmit={(e) => handleSubmit(e, body)}>
        <textarea onChange={this.handleChange} value={body} name="body" cols="50" rows="10"></textarea>
        <Button buttonPurpose='Submit'/>
      </form>
      </div>
    );
  }
  
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    })
  }
}

CreateComment.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}
 
export default CreateComment;