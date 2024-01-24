import React from 'react'
import './TodoItem.css'
export default function TodoItem({todo,completed}) {
  return (
    <li>
        <span className={`check ${completed && 'check--active'}`}>V</span>
        <p className={` ${completed && 'todo--completed'}`}>{todo}</p>
        <span className={`delete ${completed && 'delete--active'}`}>X</span>
    </li>
  )
}
