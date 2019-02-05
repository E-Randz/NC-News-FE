import axios from 'axios'
const base_url = 'https://northcoders-news-project.herokuapp.com/api'

export const fetchArticles = async () => {
  const url = `${base_url}/articles`
  const { articles } = await axios.get(url)
  return articles;
}