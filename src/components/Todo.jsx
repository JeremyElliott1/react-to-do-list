import React from 'react';

const Todo = ({ todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((element) => (element.id !== todo.id)))
  }

  const completeHandler = () => {
    setTodos(todos.map((element) => {
      if(element.id == todo.id){
        return {
          ...element, completed: !element.completed
        }
      } else {
        return element;
      }
    }))
  }
      //  className={todo.completed ? 'completed' : ''}>{todo.text}

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{todo.text}</li>
      <button onClick={completeHandler} className="complete-btn" >
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn" >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;