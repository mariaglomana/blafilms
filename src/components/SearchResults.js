import React from 'react'
import { ReactComponent as ChevronLeft } from 'images/chevron-left.svg'
import { ReactComponent as ChevronRight } from 'images/chevron-right.svg'
import MovieCard from './MovieCard'
import { INIT_PAGE } from 'pages/Home'

const SearchResults = ({ searchResult, handleLoadPage }) => {
  const { numberOfPages, page, results } = searchResult
  const isFirstPage = page === INIT_PAGE
  const isLastPage = page === numberOfPages

  return (
    <>
      {!results.length ? (
        <div className="no-results">
          <p>No results yet</p>
        </div>
      ) : (
        <div className="search-results">
          <div
            className={isFirstPage ? 'chevron-disable' : 'chevron'}
            onClick={() => {
              !isFirstPage && handleLoadPage(page - 1)
            }}
          >
            <ChevronLeft />
          </div>
          <div className="search-results-list">
            {results.map((result, i) => (
              <MovieCard key={i} result={result} />
            ))}
          </div>
          <div
            className={isLastPage ? 'chevron-disable' : 'chevron'}
            onClick={() => {
              !isLastPage && handleLoadPage(page + 1)
            }}
          >
            <ChevronRight />
          </div>
        </div>
      )}
    </>
  )
}

export default SearchResults
