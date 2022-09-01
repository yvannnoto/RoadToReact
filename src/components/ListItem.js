import React from 'react'

function ListItem({ item, onRemoveItem }) {

  return (
    <div className="col">
      <li key={item.objectID} className="card position-relative">
        <div className="card-body">
          <h5 className="card-title">{item.title} by {item.author}</h5>
          <div className="d-flex">
            <div className="d-flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="20">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </svg>
              <span className="d-flex px-2">{item.num_comments}</span>
            </div>
            <div className="d-flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="20">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
              </svg>
              <span className="d-flex px-2">{item.points}</span>
            </div>
          </div>
          <a href={item.url} rel="noreferrer" target="_blank">Visit website</a>
        </div>
        <button type="button" className="btn btn-outline-danger position-absolute top-0 end-0 m-3" onClick={() => onRemoveItem(item)}>Delete</button>
      </li>
    </div>
  )
}

export default ListItem