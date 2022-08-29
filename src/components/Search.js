import React, { Fragment, useState } from 'react'

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleOnChange = (event) => {
    setSearchTerm(event.target.value);
    props.onSearch(event);
  }

  return (
    <Fragment>
      <label htmlFor="search">Search : </label>
      <input type="text" id="search" value={searchTerm} onChange={handleOnChange} />
    </Fragment>
  )
}

export default Search