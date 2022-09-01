import { useState } from "react";
import List from "./components/List";
import Search from "./components/Search";
import useStorageState from "./hooks/useStorageState";
import incomingDatas from "./incomingDatas";

const App = () => {

  // Make the stories stateful
  const [storiesList, setStoriesList] = useState(incomingDatas);

  const [searchTerm, setSearchTerm] = useStorageState('search', '');

  const handleSearch = (event) => {
    const eventValue = event.target.value;
    setSearchTerm(eventValue);
  };

  const handleRemoveItem = (item) => {
    const newStories = incomingDatas.filter((story) => {
      return item.objectID !== story.objectID
    })

    setStoriesList(newStories);
  }

  // Filter the stories to match the searchTerm (value of the search)
  // to return another array including the provided term -> searchTerm
  const filteredStories = storiesList.filter(function (story) {
    // Lowercasing the titles and the search term in order to make the filtering case insensitive
    return story.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="container">
      <div className="py-5 p-md-5">
        <Search onSearch={handleSearch} search={searchTerm} />
        <List list={filteredStories} onRemoveItem={handleRemoveItem} />
      </div>
    </div>
  );
};

export default App;
