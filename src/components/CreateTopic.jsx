import React, { Component } from 'react';
import Button from './Button';
import { addNewTopic } from '../api';
import { navigate } from '@reach/router';
import '../styles/CreateTopic.css';

class CreateTopic extends Component {
  state = { 
    slug: '',
    description: '',
  }
  render() { 
    const { slug, description } = this.state;
    const { className } = this.props;
    return ( 
      <>
      <div className={className}>
        <h2>Create Topic</h2>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" name='slug' value={slug} placeholder='enter topic name'/>
          <textarea onChange={this.handleChange} type="text" cols='50' rows='2' name='description' value={description} placeholder='enter topic description'></textarea>
          <Button className='Submit' buttonPurpose='Submit' />
        </form>
      </div>
      </>
    );
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const { slug, description } = this.state;
    addNewTopic(slug, description)
      .then(() => {
        navigate('/topics');
      })
      .catch(console.log);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    })
  }
}
 
export default CreateTopic;