//import logo from './logo.svg';
import { Fragment } from 'react';
import List from './components/List';
import Search from './components/Search';

const welcome = {
  title: 'React',
  greeting: 'Hey'
};

// Example of a class, getName is a class method
class Person {
  // All javascript classes require a constructor
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getName() {
    return this.firstName + ' ' + this.lastName;
  }
}

// Example of a class use, "new" is mandatory to generate a new Person
// yvann.getName() uses the methode decalered in the Person class.
const yvann = new Person('Yvann', 'Noto');

const App = () => {

  const handleSearch = (event) => {

    console.log(event.target.value);

  }

  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org',
      author: new Person('Jordan', 'Walke'),
      num_comments: 3,
      points: 4,
      objectID: 0
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org',
      author: new Person('Dan', 'Abramov'),
      num_comments: 2,
      points: 5,
      objectID: 1
    },
  ];


  return (
    <Fragment>
      <div>
        <h1>{welcome.greeting} {welcome.title}!</h1>
        <p><small>Created by <i><a href="https://www.yvannnoto.com" target="_blank" rel="noreferrer">{yvann.getName()}</a></i></small></p>

      </div>
      <Search onSearch={handleSearch} />
      <List list={stories} />
    </Fragment>
  );
}

export default App;
