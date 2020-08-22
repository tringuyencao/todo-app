import React, { Component, useState } from "react";
import { connect } from 'react-redux';
import './todo.css';
import * as action from '../action';

const getFilterTodos = (todos, filter) => {
  switch (filter) {
    case action.FilterTodo.SHOW_ALL:
      return todos
    case action.FilterTodo.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case action.FilterTodo.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  todosReducer: getFilterTodos(state.todosReducer, state.filterTodoReducer)
})

const mapDispatchToProps = dispatch => ({
  addTodoRedux: (item) => dispatch(action.addTodo(item)),
  updateTodoRedux: (item) => dispatch(action.updateTodo(item)),
  removeTodoRedux: (item) => dispatch(action.removeTodo(item)),
  setFilterTodoRedux: (filter) => dispatch(action.setFilterTodo(filter)),
})

function Todos(props) {

  const [getTodos, setTodos] = useState([])

  function addTodo(value) {
    // setTodos([...getTodos, { name: value }]);
    props.addTodoRedux({ name: value, completed: false })
  }

  function updateTodo(e, todo) {
    e.preventDefault()
    let index = props.todosReducer.findIndex(item => item.name === todo.name);
    // setTodos([...getTodos.slice(0, index), {name: todo.name, completed: !todo.completed } ,...getTodos.slice(index + 1)]);
    props.updateTodoRedux({id: todo.id })
  }

  function removeTodo(e, todo) {
    e.preventDefault()
    // let index = props.todosReducer.findIndex(item => item.name === todo.name);
    // setTodos([...getTodos.slice(0, index), ...getTodos.slice(index + 1)]);
    props.removeTodoRedux({id: todo.id})
    console.log(props.todosReducer, todo.id)
  }

  function filterTodo(value) {
    props.setFilterTodoRedux(value)
  }

  return (
    <div>
      <FormAdd addTodo={addTodo} />
      <FilterTodo filterTodo={filterTodo}/>
      {props.todosReducer.length ? props.todosReducer.map((todo, index) =>
        <div key={"card_todo_"+index} className="card_todo">
          <div className={todo?.completed ? "checked_todo" : "check_todo"} onClick={(e) => updateTodo(e, todo)}>{todo?.name}</div>
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

function FilterTodo({filterTodo}){
  return (
    <div className="button_filter">
        <button onClick={() => filterTodo(action.FilterTodo.SHOW_ALL)}>All</button>
        <button onClick={() => filterTodo(action.FilterTodo.SHOW_ACTIVE)}>Active</button>
        <button onClick={() => filterTodo(action.FilterTodo.SHOW_COMPLETED)}>Completed</button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);