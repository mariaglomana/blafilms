import React, { useState, useEffect, useRef, useCallback } from 'react'
import debounce from 'just-debounce-it'

import 'App.css'
import { INITIAL_PAGE } from 'constants/index'
import { useNearScreen, useFilms } from 'hooks'
import { MovieList, Spinner, InputSearch } from 'components'

function Home() {
  const [keywordToSearch, setKeywordToSearch] = useState('')

  const { loading, searchResults, page, setPage, error } = useFilms({
    keyword: keywordToSearch,
  })

  const submitKeywordSearch = useCallback(
    keyword => {
      setPage(INITIAL_PAGE)
      setKeywordToSearch(keyword)
    },
    [setPage, setKeywordToSearch],
  )

  const visorRef = useRef()
  const { isNearScreen } = useNearScreen({
    externalRef: !loading && visorRef,
    once: false,
  })

  const handleNextPage = () => {
    setPage(page => page + 1)
  }

  const debounceHandleNextPage = useCallback(
    debounce(() => handleNextPage(), 200),
    [setPage],
  )

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage()
  }, [isNearScreen, debounceHandleNextPage])

  return (
    <div className="App">
      <InputSearch submitKeywordSearch={submitKeywordSearch} />
      {loading && page === 1 ? (
        <div className="no-results">
          <Spinner />
        </div>
      ) : !searchResults.length ? (
        <div className="no-results">
          <p>{error}</p>
        </div>
      ) : (
        <>
          <div className="search-results">
            <div></div>
            <MovieList results={searchResults} />
            <div></div>
          </div>
          <div id="visor" ref={visorRef}></div>
        </>
      )}
    </div>
  )
}

export default Home
