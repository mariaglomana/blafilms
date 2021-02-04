import React from 'react'
import placeholderImg from 'images/placeholder.png'

const MovieCard = ({ result }) => {
  const { imdbID, Poster, Title, Type, Year } = result
  return (
    <div key={imdbID} className="search-item">
      <img src={Poster === 'N/A' ? placeholderImg : Poster} alt="poster" />
      <div className="search-item-data">
        <div className="title">{Title}</div>
        <div className="meta">{`${Type} | ${Year}`}</div>
      </div>
    </div>
  )
}

export default MovieCard
