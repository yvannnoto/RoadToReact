import React from 'react'

function ListItem(props) {
  return (
    <li key={props.item.objectID}>
      <a href={props.item.url} rel="noreferrer" target="_blank">{props.item.title}</a>
      <span>&nbsp;by {props.item.author.getName()}</span>
      <div>
        <span>{props.item.num_comments} comments</span>
        <span> | </span>
        <span>{props.item.points} points</span>
      </div>
    </li>
  )
}

export default ListItem