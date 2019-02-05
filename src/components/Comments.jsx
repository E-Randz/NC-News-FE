import React, { Component } from 'react';

class Comments extends Component {
  state = { 
    comments: [],
  }
  async componentDidMount() {
    this.setState({
      comments: ['hello', 'hi', 'what']
    })
  }
  render() { 
    const { comments } = this.state;
    return ( 
      <div>
        <h2 className='Comments-title'>Comments</h2>
        {comments.map(comment => {
          return <p key={comment} className='comment_item'>{comment}</p>
        })}
      </div>
    );
  }
}
 
export default Comments;