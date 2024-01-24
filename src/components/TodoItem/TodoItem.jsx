import React from 'react'
import './TodoItem.css'
export default function TodoItem({todo}) {
  return (
    <li>
        <span className='yes'>V</span>
        <p>{todo}</p>
        <span className='close'>X</span>
    </li>
  )
}
