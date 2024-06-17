import React from 'react'

export default function TodoCard(props) {
  const{children,handleDeleteTodo,index} =props
  return (
    <li className='todoItem'>
      {children}
      <div className='actionsContainer'> 
        <button onClick={()=>{handleDeleteTodo(index)}}>
        <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
  </li>
  )
}
