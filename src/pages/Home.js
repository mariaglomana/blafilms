import React, { useState } from 'react'
import 'App.css'
import { InputSearch, SearchResults } from 'components'
import getSearchResult from 'api'

function Home() {
  const [searchResult, setSearchResult] = useState([])
  const [keyword, setKeyword] = useState('')

  const search = async keyword => {
    const data = await getSearchResult(keyword)
    let newSearchResults = []
    if (data?.Response === 'True') {
      newSearchResults = data.Search
    }
    setSearchResult(newSearchResults)
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    search(keyword)
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
      <SearchResults searchResult={searchResult} />
    </div>
  )
}

export default Home
