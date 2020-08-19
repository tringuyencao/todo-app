import React, { Component, useState } from "react";
import './todo.css';

function Todos() {

  const [getTodos, setTodos] = useState([])

  function addTodo(value) {
    setTodos([...getTodos, { name: value }]);
  }

  function updateTodo(e, todo) {
    e.preventDefault()
    let index = getTodos.findIndex(item => item.name === todo.name);
    setTodos([...getTodos.slice(0, index), {name: todo.name, completed: !todo.completed } ,...getTodos.slice(index + 1)]);
  }

  function removeTodo(e, todo) {
    e.preventDefault()
    let index = getTodos.findIndex(item => item.name === todo.name);
    setTodos([...getTodos.slice(0, index), ...getTodos.slice(index + 1)]);
  }

  return (
    <div>
      <FormAdd addTodo={addTodo} />
      {getTodos.length ? getTodos.map((todo, index) =>
        <div key={"card_todo_"+index} className="card_todo">
          <div className={todo.completed ? "checked_todo" : "check_todo"} onClick={(e) => updateTodo(e, todo)}>{todo.name}</div>
          <div className="remove_todo" onClick={(e) => removeTodo(e, todo)}>X</div>
        </div>) : "No item"}
    </div>
  )
}

function FormAdd({ addTodo }) {
  const [getTodo, setTodo] = useState("")

  function createTodo(e) {
    e.preventDefault();
    if (getTodo) addTodo(getTodo);
    setTodo("")
  }

  return (
    <form onSubmit={createTodo}>
      <input className="input_text_todo" type="text" value={getTodo} onChange={(e) => setTodo(e.target.value)}></input>
      <button className="button_todo">Add</button>
    </form>
  )
}

export default Todos;