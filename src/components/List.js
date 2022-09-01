import React from 'react'
import ListItem from './ListItem'

function List({ list }) {
  return (
    <ul className="list-group">
      {list.map((item) => {
        return (
          <ListItem item={item} key={item.objectID} />
        )
      })}
    </ul>
  )
}

export default List