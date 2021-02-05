const BASE_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=`

export default async function getSearchResult(keyword, page) {
  const response = await fetch(BASE_URL + keyword + '&page=' + page)
  const data = await response.json()
  if (data?.Response === 'True') {
    const numberOfPages = Math.floor(data.totalResults / 10)
    const results = data.Search
    return { numberOfPages, page, results }
  }
}
