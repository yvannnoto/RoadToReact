import React, { Fragment } from "react";

const Search = ({ search, onSearch }) => {

  return (
    <Fragment>
      <label htmlFor="search">Search : </label>
      <input type="text" id="search" onChange={onSearch} value={search} />
    </Fragment>
  );
};

export default Search;
