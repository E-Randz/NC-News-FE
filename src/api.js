import axios from 'axios'
const BASE_URL = 'https://northcoders-news-project.herokuapp.com/api';


export const fetchArticles = async (topic, queries) => {
  let url = topic ? `${BASE_URL}/topics/${topic}/articles` : `${BASE_URL}/articles`;
  url = queries ? url + queries : url;
  const data = await axios.get(url);
  return data;
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

export const fetchTopics = async () => {
  const url = `${BASE_URL}/topics`;
  const { data: { topics } } = await axios.get(url)
  return topics;
}

export const fetchUsers = async () => {
  const url = `${BASE_URL}/users`;
  const { data: { users } } = await axios.get(url)
  return users;
}

export const getUserByUsername = async (username) => {
  const url = `${BASE_URL}/users/${username}`;
  const { data } = await axios.get(url);
  return data;
}

export const fetchUserData = async (username) => {
  const url = `${BASE_URL}/users/${username}/articles`;
  const { data } = await axios.get(url);
  return data;
}

export const addNewArticle = async (username, topic, title, body) => {
  const url = `${BASE_URL}/topics/${topic}/articles`;
  const postBody = {
    username,
    title,
    body,
  }
  const { data } = await axios.post(url, postBody)
  return data;
}

export const addNewTopic = async (slug, description) => {
  const url = `${BASE_URL}/topics`;
  const postBody = {
    slug,
    description,
  }
  const { data } = await axios.post(url, postBody)
  return data;
}

export const changeVoteCount = (voteChange, item, commentArticleId) => {
  const url = commentArticleId ? `${BASE_URL}/articles/${commentArticleId}/comments/${item.comment_id}`
                               : `${BASE_URL}/articles/${item.article_id}`;
  const patchBody = { inc_votes: voteChange };
  return axios.patch(url, patchBody)
}

export const deleteItem = (article_id, comment_id) => {
  const url = comment_id ? `${BASE_URL}/articles/${article_id}/comments/${comment_id}` : `${BASE_URL}/articles/${article_id}`;
  return axios.delete(url);
}

export const addNewComment = (article_id, username, body) => {
  const url = `${BASE_URL}/articles/${article_id}/comments`;
  const postBody = {
    username,
    body,
  }
  return axios.post(url, postBody)
}




