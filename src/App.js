import React, { useState, useEffect } from 'react'
import './App.css'
import './components/HelloWorld'
import Form from './components/Form.jsx'
import ToDoList from './components/ToDoList.jsx'

function App() {
  //StateManagement
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredToDos, setFilteredToDos] = useState([]);

  //only runs once on load.
  useEffect(
    () => {
      getLocalTodos();
    }
    , ([])
  );

  //Use effect, that runs when there are state changes to 'todos' and 'status'
  useEffect(
    () => {
      saveLocalTodos();
      filterHandler();
    }
    , [todos, status]
  )

  //functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredToDos(todos.filter((todo => todo.completed)));
        break;
      case "uncompleted":
        setFilteredToDos(todos.filter((todo) => !todo.completed))
        break;
      default:
        setFilteredToDos(todos);
        break;
    }
  }

  const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos))
  }

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
     let localTodos = JSON.parse(localStorage.getItem("todos", JSON.stringify(todos)));
     setTodos(localTodos);
    }
  }

  return (
    <div className='App'>
      <header>
        <h1>To Do List :</h1>
      </header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} setStatus={setStatus} />
      <ToDoList todos={todos} setTodos={setTodos} filteredToDos={filteredToDos} />
    </div>
  )
}

export default App
