import { useEffect, useState } from 'react'
import getSearchResult from 'api'
import { INITIAL_PAGE, DEFAULT_RESULT, DEFAULT_ERROR } from 'constants/index'

export default function useFilms({ keyword = '' }) {
  const [loading, setLoading] = useState(false)
  const [searchResults, setSearchResults] = useState(DEFAULT_RESULT)
  const [page, setPage] = useState(INITIAL_PAGE)
  const [error, setError] = useState(DEFAULT_ERROR)

  const search = async () => {
    if (keyword === '') {
      setSearchResults(DEFAULT_RESULT)
      return
    }

    const response = await getSearchResult(keyword, page)
    let newSearchResults = DEFAULT_RESULT
    if (!response || response?.error) {
      setError(response ? response.error : DEFAULT_ERROR)
    } else if (page === INITIAL_PAGE) {
      newSearchResults = response.results
    } else {
      newSearchResults = searchResults.concat(response.results)
    }
    setSearchResults(newSearchResults)
  }

  const updateResults = async () => {
    setLoading(true)
    await search()
    setLoading(false)
  }

  useEffect(() => {
    updateResults()
  }, [keyword, setSearchResults, setPage, setError])

  useEffect(() => {
    if (page === INITIAL_PAGE) return
    updateResults()
  }, [page, setSearchResults, setPage, setError])

  return { loading, searchResults, page, setPage, error }
}
