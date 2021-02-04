import React, { useState, useEffect } from 'react'
import 'App.css'
import { InputSearch, SearchResults } from 'components'
import getSearchResult from 'api'

function Home() {
  const [searchResult, setSearchResult] = useState()

  useEffect(() => {
    const search = async () => {
      const data = await getSearchResult('king')

      if (!searchResult) {
        setSearchResult(data)
      }
    }

    search()
  })

  return (
    <div className="App">
      <InputSearch />
      <SearchResults searchResult={searchResult} />
    </div>
  )
}

export default Home
