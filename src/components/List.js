import React from 'react'
import ListItem from './ListItem'

function List({ list, onRemoveItem }) {

  return (
    <ul className="row row-cols-1 row-cols-md-2 g-4 p-0">
      {list.map((item) => {
        return (
          <ListItem item={item} key={item.objectID} onRemoveItem={onRemoveItem} />
        )
      })}
    </ul>
  )
}

export default List