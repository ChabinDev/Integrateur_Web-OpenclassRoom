import React from 'react'

const Todo = ({ todo }) => {
  return (
    <li className='todo'>{todo.title}</li>
  )
}

export default Todo