import React from 'react';
import Check from './Check';
import {BsTrash} from 'react-icons/bs'

const TodoItems = ({todo, changeTodo,removeTodo}) => {
  
  return (
  <div className='flex items-center justify-between mb-4 rounded-2xl bg-gray-700 text-yellow-50 p-5 w-full'>
    <button
     className='flex items-center' 
     onClick={()=>changeTodo(todo._id)}
     >
    <Check isCompleted={todo.isCompleted}/>
    <span className={`${todo.isCompleted? 'line-through' : ''}`}>{todo.title}</span>
    </button>
    <button onClick={() => removeTodo(todo._id)}>
    <BsTrash
       size={22} 
       className='text-gray-500 hover:text-gray-300 transition-colors ease duration-300'/>
    </button>
    </div>
    
  )
}

export default TodoItems