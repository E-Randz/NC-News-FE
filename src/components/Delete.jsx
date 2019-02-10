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
    const { DeleteProps: { text, itemType, item, comment_article_id } } = this.props;
    const { deleteShowing, redirect } = this.state;
    return ( 
      <div className='Delete'>
        {deleteShowing && <button onClick={this.handleDeleteCheck} className='Delete-button'>{text}</button>}
        {!deleteShowing &&
          <> 
          <p>Permanently Delete {itemType}?</p>
          <button onClick={() => this.handleDelete(item, comment_article_id)} className='confirmDelete'>Yes</button><button onClick={this.handleDeleteCancel} className='cancelDelete'>No</button>
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
  
  handleDelete = (item, comment_article_id) => {
    const { handleDelete } = this.props;
    const id = comment_article_id ? item.comment_id : item.article_id;

    if (comment_article_id) {
      deleteItem(comment_article_id, id)
        .then(() => {
          handleDelete(id);
        })
        .catch(console.log);
    } else {
      deleteItem(id, null)
        .then(() => {
          this.setState({
            redirect: '/articles',
          })
        })
        .catch(console.log);
    }

  }
}

export default Delete;
