import List from "./components/List";
import Search from "./components/Search";
import useStorageState from "./hooks/useStorageState";

// Example of a class, getName is a class method
class Person {
  // All javascript classes require a constructor
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getName() {
    return this.firstName + " " + this.lastName;
  }
}

const App = () => {

  const [searchTerm, setSearchTerm] = useStorageState('search', '');

  const handleSearch = (event) => {
    const eventValue = event.target.value;
    setSearchTerm(eventValue);
  };

  const stories = [
    {
      title: "React",
      url: "https://reactjs.org",
      author: new Person("Jordan", "Walke"),
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org",
      author: new Person("Dan", "Abramov"),
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  // Filter the stories to match the searchTerm (value of the search)
  // to return another array including the provided term -> searchTerm
  const filteredStories = stories.filter(function (story) {
    // Lowercasing the titles and the search term in order to make the filtering case insensitive
    return story.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="container">
      <div className="py-5 p-md-5">
        <Search onSearch={handleSearch} search={searchTerm} />
        <List list={filteredStories} />
      </div>
    </div>
  );
};

export default App;
