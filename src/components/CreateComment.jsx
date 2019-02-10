import React, { Component } from 'react';
import Button from './Button';
import'../styles/CreateComment.css';
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
 
export default CreateComment;