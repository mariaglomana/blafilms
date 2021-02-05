import React, { useState } from 'react'
import 'App.css'
import { InputSearch, SearchResults } from 'components'
import getSearchResult from 'api'

export const INIT_PAGE = 1

function Home() {
  const defaultResults = {
    numberOfPages: 0,
    page: INIT_PAGE,
    results: [],
  }
  const defaultError = 'No results yet'
  const [searchResult, setSearchResult] = useState(defaultResults)
  const [error, setError] = useState(defaultError)
  const [keyword, setKeyword] = useState('')

  const search = async (keyword, page) => {
    const response = await getSearchResult(keyword, page)
    let newSearchResults = defaultResults
    if (response) {
      if (response?.error) {
        setError(response.error)
      } else {
        newSearchResults = response
      }
      setSearchResult(newSearchResults)
    } else {
      setError(defaultError)
    }
  }

  const loadNewSearch = keyword => {
    search(keyword, INIT_PAGE)
  }

  const loadNewPage = page => {
    search(keyword, page)
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    loadNewSearch(keyword)
  }

  const handleChange = evt => {
    setKeyword(evt.target.value)
  }

  return (
    <div className="App">
      <InputSearch
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        keyword={keyword}
      />
      <SearchResults
        searchResult={searchResult}
        handleLoadPage={loadNewPage}
        error={error}
      />
    </div>
  )
}

export default Home
