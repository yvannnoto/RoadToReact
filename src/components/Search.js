import InputField from "./InputField";

const Search = ({ search, onSearch }) => {

  return (
    <div className="input-group mb-3">
      <InputField id="search" onInputChange={onSearch} value=
        {search} placeholder="Search through the list"
        isFocused />
    </div>
  );
};

export default Search;
