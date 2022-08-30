//import logo from './logo.svg';
import { Fragment, useState } from "react";
import List from "./components/List";
import Search from "./components/Search";

const welcome = {
  title: "React",
  greeting: "Hey",
};

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

// Example of a class use, "new" is mandatory to generate a new Person
// yvann.getName() uses the methode decalered in the Person class.
const yvann = new Person("Yvann", "Noto");

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
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
    <Fragment>
      <div>
        <h1>
          {welcome.greeting} {welcome.title}!
        </h1>
        <p>
          <small>
            Created by{" "}
            <i>
              <a
                href="https://www.yvannnoto.com"
                target="_blank"
                rel="noreferrer"
              >
                {yvann.getName()}
              </a>
            </i>
          </small>
        </p>
      </div>
      <Search onSearch={handleSearch} search={searchTerm} />
      <List list={filteredStories} />
    </Fragment>
  );
};

export default App;
