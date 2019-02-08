import React from 'react';
import Articles from './Articles';
import UserItem from './UserItem';
import CreateArticle from './CreateArticle';
import CreateTopic from './CreateTopic';


const Home = (props) => {
  const { user } = props
  return ( 
    <>
      <UserItem user={user} className='Home-user-item'/>
      <Articles title='Top Articles' className='Home-articles'/>  
      <CreateArticle className='Home-create-article' />
      <CreateTopic className='Home-create-topic' /> 
    </>    
  );
}
 
export default Home;