import React, { Component } from 'react';
import { fetchTopics } from '../api';
import { Link } from '@reach/router';


class Topics extends Component {
  state = { 
    topics: [],
  }
  componentDidMount () {
    fetchTopics()
      .then(topics => {
        this.setState({
          topics,
        })
      })
  }
  render() { 
    const { topics } = this.state;
    return ( 
      <div className='Topics'>
        {topics.map(topic => {
          const { slug, description } = topic;
          return (
            <div key={slug} className="Topic-item">
              <h2 className="Topic-slug"><Link to={`${slug}/articles`}>{slug}</Link></h2>
              <p className="Topic-description">{description}</p>
            </div>
          )
        })}
      </div>
    );
  }
}
 
export default Topics;