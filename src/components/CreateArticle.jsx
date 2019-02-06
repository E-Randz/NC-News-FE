import React, { Component } from 'react';
import Button from './Button';
import '../styles/CreateArticle.css'
import { addNewArticle, fetchTopics } from '../api';
import { Redirect } from '@reach/router';

class CreateArticle extends Component {
  state = { 
      title: '',
      body: '',
      topic: '',
      topicOptions: null,
      redirect: null,
  }
  componentDidMount() {
    fetchTopics()
      .then(topics => {
        const topicSlug = topics.map(topic => topic.slug);
        this.setState({
          topicOptions: topicSlug,
        })
      })
  }
  render() { 
    const { topicOptions, redirect, title, body } = this.state;
    return (
      <>
      {!redirect &&
      <div className='Create-article'>
      <h2>Create Article</h2>
        <form onSubmit={this.handleSubmit}>
          {topicOptions && 
            <select name='topic' onChange={this.handleChange}>
            {topicOptions.map(topic => {
              return <option key={topic} value={topic}>{topic}</option>
            })}
            </select>
          }
          <input value={title} placeholder='enter title' onChange={this.handleChange} type="text" name='title'/>
          <textarea value={body} onChange={this.handleChange} name="body" id="" cols="30" rows="10"></textarea>
          <Button buttonPurpose='Submit'/>
        </form>
      </div>
      }
      {redirect && <Redirect noThrow to={redirect} />}
      </>
    );
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { title, body, topic } = this.state;
    const { user: { username } } = this.props;
    addNewArticle(username, topic, title, body)
      .then(({article: { article_id }}) => {
        const path = `/articles/${article_id}`
        this.setState({
          redirect: path,
        })
      })
      .catch((err) => console.log(err));
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    })
  }
}
 
export default CreateArticle;

// username