import axios from 'axios'
const BASE_URL = 'https://northcoders-news-project.herokuapp.com/api'

export const fetchArticles = async (topic) => {
  const url = topic ? `${BASE_URL}/topics/${topic}/articles` : `${BASE_URL}/articles`;
  const { data: { articles } } = await axios.get(url);
  return articles;
}

export const fetchOneArticle = async (article_id) => {
  const url = `${BASE_URL}/articles/${article_id}`;
  const { data : { article } } = await axios.get(url);
  return article;
}

export const fetchComments = async (article_id) => {
  const url = `${BASE_URL}/articles/${article_id}/comments`;
    const { data: { comments } } = await axios.get(url)
    return comments;
}
export const fetchTopics = async (article_id) => {
  const url = `${BASE_URL}/topics`;
  try {
    const { data: { topics } } = await axios.get(url)
    return topics;
  } catch(err) {
    return err;
  }
}

export const fetchUsers = async () => {
  const url = `${BASE_URL}/users`;
  const { data: { users } } = await axios.get(url)
  return users;
}

export const getUserByUsername = async (username) => {
  const url = `${BASE_URL}/users/${username}`;
  const { data } = await axios.get(url)
  return data;
}
