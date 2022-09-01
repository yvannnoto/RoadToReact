const Search = ({ search, onSearch }) => {

  return (
    <div class="input-group mb-3">
      <input type="text" className="form-control" id="search" onChange={onSearch} value={search} placeholder="Search through the list" />
      <button class="btn btn-primary" type="button" id="button-addon2">Search</button>
    </div>
  );
};

export default Search;
