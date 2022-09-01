import React from 'react'

function ListItem({ item }) {
  return (
    <li key={item.objectID} className="list-group-item">
      <a href={item.url} rel="noreferrer" target="_blank">{item.title}</a>
      <span>&nbsp;by {item.author.getName()}</span>
      <div>
        <span>{item.num_comments} comments</span>
        <span> | </span>
        <span>{item.points} points</span>
      </div>
    </li>
  )
}

export default ListItem