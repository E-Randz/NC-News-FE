import React, { Component } from 'react';
import Button from './Button';
import '../styles/CreateArticle.css'
import { addNewArticle, fetchTopics } from '../api';
import { navigate } from '@reach/router';

class CreateArticle extends Component {
  state = { 
      title: '',
      body: '',
      topic: 'coding',
      topicOptions: null,
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
    const { topicOptions, title, body, topic } = this.state;
    const { className } = this.props;
    return (
      <>
      <div className={className}>
      <h2>Create Article</h2>
        <form onSubmit={this.handleSubmit}>
          {topicOptions && 
            <>
            <label htmlFor='topic'>Topic:</label>
            <select value={topic} id='topic' name='topic' onChange={this.handleChange}>
            {topicOptions.map(topic => {
              return <option key={topic}>{topic}</option>
            })}
            </select>
            </>
          }
          <label htmlFor='title'>Title:</label>
          <input value={title} id='title' placeholder='enter title' onChange={this.handleChange} type="text" name='title'/>
          <label htmlFor='body'>Body:</label>
          <textarea id='body' value={body} onChange={this.handleChange} name="body" cols="30" rows="10"></textarea>
          <Button className='Submit' buttonPurpose='Submit'/>
        </form>
      </div>
      </>
    );
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { title, body, topic } = this.state;
    const { user: { username } } = this.props;
    addNewArticle(username, topic, title, body)
      .then(({article}) => {
        const { article_id } = article 
        const path = `/articles/${article_id}`
        navigate(path, {state: {article}})
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