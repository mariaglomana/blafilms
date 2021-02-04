import React from 'react'

const InputSearch = ({ handleSubmit, handleChange, keyword }) => {
  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleChange}
        value={keyword}
      />
      <button>Search</button>
    </form>
  )
}

export default InputSearch
