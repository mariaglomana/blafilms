import React from 'react'
import { ReactComponent as ChevronLeft } from 'images/chevron-left.svg'
import { ReactComponent as ChevronRight } from 'images/chevron-right.svg'
import MovieCard from './MovieCard'

const SearchResults = ({ searchResult }) => (
  <>
    {!searchResult.length ? (
      <p>No results yet</p>
    ) : (
      <div className="search-results">
        <div className="chevron">
          <ChevronLeft />
        </div>
        <div className="search-results-list">
          {searchResult.map(result => (
            <MovieCard result={result} />
          ))}
        </div>
        <div className="chevron">
          <ChevronRight />
        </div>
      </div>
    )}
  </>
)

export default SearchResults
