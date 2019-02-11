import React from 'react';
import Articles from './Articles';
import UserItem from './UserItem';
import CreateArticle from './CreateArticle';
import CreateTopic from './CreateTopic';
import '../styles/Home.css';


const Home = (props) => {
  const { user } = props
  const queries = '?sort_by=votes&order=desc&limit=5';
  return ( 
    <div className='Home-page'>
      <h1 className='Home-title'>NC News</h1>
      <h2 className='Dashboard-title'>Dashboard</h2>
      <UserItem className="Home-user-item" user={user}/>
      <Articles queries={queries} title='Top Articles' className='Home-articles'/>  
      <CreateArticle user={user} className='Home-create-article' />
      <CreateTopic className='Home-create-topic' /> 
    </div>    
  );
}
 
export default Home;