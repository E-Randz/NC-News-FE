import React from 'react';
import Articles from './Articles';
import UserItem from './UserItem';
import CreateArticle from './CreateArticle';
import CreateTopic from './CreateTopic';


const Home = (props) => {
  const { user } = props
  const queries = '?sort_by=votes&order=desc&limit=5';
  return ( 
    <>
      <UserItem className="Home-user-item" user={user}/>
      <Articles queries={queries} title='Top Articles' className='Home-articles'/>  
      <CreateArticle className='Home-create-article' />
      <CreateTopic className='Home-create-topic' /> 
    </>    
  );
}
 
export default Home;