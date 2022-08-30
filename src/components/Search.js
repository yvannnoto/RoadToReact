import React, { Fragment } from "react";

const Search = (props) => {
  return (
    <Fragment>
      <label htmlFor="search">Search : </label>
      <input type="text" id="search" onChange={props.onSearch} value={props.search} />
    </Fragment>
  );
};

export default Search;
