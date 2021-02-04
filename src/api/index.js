const API_KEY = 'a461e386'
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=`

export default async function getSearchResult(keyword) {
  const response = await fetch(BASE_URL + keyword)
  const data = await response.json()
  return data
}
