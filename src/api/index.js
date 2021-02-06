import axios from 'axios'
const BASE_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=`

const api = axios.create({ baseURL: BASE_URL })

export default async function getSearchResult(keyword, page) {
  try {
    const response = await api.get(BASE_URL + keyword + '&page=' + page)
    if (response.data?.Response === 'True') {
      const results = response.data.Search
      return { results }
    } else {
      return { error: response.data.Error }
    }
  } catch (error) {
    console.error(error)
  }
}
