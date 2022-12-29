import React from 'react'

const CreateTodoField = ({setTodos}) => {
    const [title, setTitle] = React.useState('')

    const addTodo = (title) => {
        setTodos(prev => [ ...prev, {
         _id: new Date(),
         title,
         isCompleted: false
        } ,
    ]   )
    setTitle('')
     }
  return (
    <div className='flex items-center justify-between mb-4 rounded-2xl  bg-gray-600 text-yellow-50 px-5 py-2 w-full mt-20'>
    <input type="text" onChange={e => setTitle(e.target.value)} 
    value={title}
     onKeyPress={e => e.key === 'Enter' && addTodo(title)}
      className='bg-transparent w-full border-none outline-none'  
      placeholder='Add tasks'
     />
    </div>
  )
}

export default CreateTodoField