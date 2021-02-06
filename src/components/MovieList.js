import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ results }) => {
  return (
    <div className="search-results-list">
      {results.map((result, i) => (
        <MovieCard key={i} result={result} />
      ))}
    </div>
  )
}

export default MovieList
