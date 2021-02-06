import React, { useState } from 'react'
import { trim } from 'lodash'

const InputSearch = ({ submitKeywordSearch }) => {
  const [keyword, setKeyword] = useState('')
  const handleChange = evt => {
    setKeyword(evt.target.value)
  }
  const handleSubmit = evt => {
    evt.preventDefault()
    submitKeywordSearch(trim(keyword))
  }

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
