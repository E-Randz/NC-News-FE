import React, { Component } from 'react';
import Button from './Button';

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
        <textarea onChange={this.handleChange} value={body} name="body" cols="30" rows="10"></textarea>
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