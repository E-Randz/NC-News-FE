import React from 'react';
import Articles from './Articles';
import UserItem from './UserItem';
import CreateArticle from './CreateArticle';
import CreateTopic from './CreateTopic';
import '../styles/Home.css';
import PropTypes from 'prop-types';


const Home = (props) => {
  const { user } = props
  const queries = '?sort_by=votes&order=desc&limit=3';
  return (
    <div className="Home-page">
      <div className="Home-background">
        <h1 className="Home-title">NC NEWS</h1>
      </div>
      <h2 className="Dashboard-title">{user.username}</h2>
      <UserItem className="Home-user-item" user={user}/>
      <Articles profile={true} queries={queries} limit={3} title="Top Articles" className="Home-articles"/>
      <CreateArticle user={user} className="Home-create-article" />
      <CreateTopic className="Home-create-topic" />
    </div>
  );
}

Home.propTypes = {
  user: PropTypes.object
}

export default Home;