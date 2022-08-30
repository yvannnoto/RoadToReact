import React from 'react'
import ListItem from './ListItem'

function List({ list }) {
  return (
    <ul>
      {list.map((item) => {
        return (
          <ListItem item={item} key={item.objectID} />
        )
      })}
    </ul>
  )
}

export default List