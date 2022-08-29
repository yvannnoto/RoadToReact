import React from 'react'
import ListItem from './ListItem'

function List(props) {
  return (
    <ul>
      {props.list.map((item, index) => {
        return (
          <ListItem item={item} key={index} />
        )
      })}
    </ul>
  )
}

export default List