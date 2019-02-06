import React, { Component } from 'react';
import Button from './Button';
import { addNewTopic } from '../api';
import { Redirect } from '@reach/router';

class CreateTopic extends Component {
  state = { 
    slug: '',
    description: '',
    redirect: null,
  }
  render() { 
    const { slug, description, redirect } = this.state;
    return ( 
      <>
      <div className='Create-topic'>
        <h2>Create Topic</h2>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" name='slug' value={slug} placeholder='enter topic name'/>
          <input onChange={this.handleChange} type="text" name='description' value={description} placeholder='enter topic description'/>
          <Button buttonPurpose='Create Topic' />
        </form>
      </div>
      {redirect && <Redirect noThrow to={redirect}/>}
      </>
    );
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const { slug, description } = this.state;
    addNewTopic(slug, description)
      .then(() => {
        this.setState({
          redirect: '/topics',
        })
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