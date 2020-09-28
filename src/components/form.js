import React from 'react';

const Form = () => {
  return (
    <form>
      <input type="text" className="todo-input"></input>
      <button className="todo-button" type="submit">
        <i className="faas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option vale="all">All</option>
          <option vale="completed">Completed</option>
          <option vale="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;