//import logo from './logo.svg';
import { Fragment } from 'react';
import './App.css';

const welcome = {
  title: 'React',
  greeting: 'Hey'
};

function getTitle(title) {
  return title;
}

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org',
    author: 'Dan Abramov and Andrew Clark',
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
            <a href={item.url} rel="noreferrer" target="_blank">{getTitle(item.title)}</a>
            <span>&nbsp;by {item.author}</span>
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


function App() {
  return (
    <div>
      <h1>{welcome.greeting} {getTitle(welcome.title)}!</h1>
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
