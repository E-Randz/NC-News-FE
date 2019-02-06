import React, { Component }  from 'react';
import '../styles/DeleteButton.css';
import { deleteItem } from '../api';
import { Redirect } from '@reach/router';

class Delete extends Component {
  state = { 
    deleteShowing: true,
    redirect: null,
  }
  render() { 
    const { text, article } = this.props;

    const { deleteShowing, redirect } = this.state;
    return ( 
      <div className='Delete'>
        {deleteShowing && <button onClick={this.handleDeleteCheck} className='Delete-button'>{text}</button>}
        {!deleteShowing &&
          <> 
          <p>Permanently Delete Article?</p>
          <button onClick={() => this.handleDelete(article.article_id)}className='confirmDelete'>Yes</button><button onClick={this.handleDeleteCancel} className='cancelDelete'>No</button>
          </>
        }
        {redirect && <Redirect noThrow to={redirect} />}
      </div>

    );
  }
  handleDeleteCheck = () => {
    this.setState({
      deleteShowing: false,
    })
  }
  handleDeleteCancel = () => {
    this.setState({
      deleteShowing: true,
    })
  }
  handleDelete = (article_id, comment_id) => {
    deleteItem(article_id, comment_id)
      .then(() => {
        this.setState({
          redirect: '/articles',
        })
      })
  }
}

export default Delete;
