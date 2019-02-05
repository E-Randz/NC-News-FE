import axios from 'axios'
const base_url = 'https://northcoders-news-project.herokuapp.com/api'

export const fetchArticles = async () => {
  const url = `${base_url}/articles`
  const { data: { articles } } = await axios.get(url);
  return articles;
}

export const fetchOneArticle = async (article_id) => {
  const url = `${base_url}/articles/${article_id}`;
  const { data : { article } } = await axios.get(url);
  return article;
}

export const fetchComments = async (article_id) => {
  const url = `${base_url}/articles/${article_id}/comments`;
  try {
    const { data: { comments } } = await axios.get(url)
    return comments;
  } catch(err) {
    console.log(err);
    return err;
  }
}