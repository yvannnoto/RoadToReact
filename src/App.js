//import logo from './logo.svg';
import { Fragment } from 'react';
import './App.css';

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

const welcome = {
  title: 'React',
  greeting: 'Hey'
};

const list = [
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

function List() {
  return (
    <ul>
      {list.map(function (item) {
        return (
          <li key={item.objectID}>
            <a href={item.url} rel="noreferrer" target="_blank">{item.title}</a>
            <span>&nbsp;by {item.author.getName()}</span>
            <div>
              <span>{item.num_comments} comments</span>
              <span> | </span>
              <span>{item.points} points</span>
            </div>
          </li>
        )
      })}
    </ul>
  );
}

function Search() {
  return (
    <Fragment>
      <label htmlFor="search">Search : </label>
      <input type="text" id="search" />
    </Fragment>
  )
}

// Example of a class use, "new" is mandatory to generate a new Person
// yvann.getName() uses the methode decalered in the Person class.
const yvann = new Person('Yvann', 'Noto');

function App() {
  return (
    <div>
      <h1>{welcome.greeting} {welcome.title}!</h1>
      <p><small>Created by <i><a href="https://www.yvannnoto.com" target="_blank" rel="noreferrer">{yvann.getName()}</a></i></small></p>
      <div>
        <Search />
      </div>
      <div>
        <List />
      </div>
    </div>
  );
}

export default App;
