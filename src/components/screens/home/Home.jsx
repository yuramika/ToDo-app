import React , {useState} from 'react'
import TodoItems from './item/TodoItems'
import CreateTodoField from './CreateTodoField'
const data = []
const Home = () => {

  const [todos, setTodos] = useState(data)

	const changeTodo = id => {
		const copy = [...todos]
		const current = copy.find(t => t._id === id)
		current.isCompleted = !current.isCompleted
		setTodos(copy)
	}


  const removeTodo = id =>  setTodos([...todos].filter(t => t._id !== id))

 if (todos.length < 1) {
  return <div className='h-screen w-4/5 mx-auto'>
  <h1 className='text-2xl font-bold text-center mb-6'>ToDo</h1>
    <h1 className='font-bold text-center text-4xl'>ЗАДАЧ НЕТ!</h1>
    <CreateTodoField setTodos={setTodos}/>
  </div>
 }
  
  return (
      <div className='h-screen w-4/5 mx-auto'>
      <h1 className='text-2xl font-bold text-center mb-6'>ToDo</h1>
        { todos.map(todo => (
          <TodoItems
           key={todo._id}
					todo={todo}
					changeTodo={changeTodo}
					removeTodo={removeTodo}
            />
            ))}
      <CreateTodoField setTodos={setTodos}/>
      </div>
  )
        
} 

export default Home