import React from 'react'
import Todo from './Todo'

const ToDoList = ({ todos, setTodos, filteredToDos}) => {
  return (
    <div className='todo-container'>
      <ul className='todo-list'>
        {filteredToDos.map(todo => (
          <Todo 
          setTodos = {setTodos}
          todos = {todos}
          todo = {todo}
          key={todo.id}  />
        ))}
      </ul>
    </div>
  )
}

export default ToDoList
