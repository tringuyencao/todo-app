let nextTodoId = 0

const addTodo = item => ({type: 'ADD_TODO', ...item, id: nextTodoId++})

const updateTodo = item => ({type: 'UPDATE_TODO', ...item})

const removeTodo = item => ({type: 'REMOVE_TODO', ...item})

const setFilterTodo = filter => ({type: 'SET_FILTER_TODO', filter})

const FilterTodo = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
}

export {
  addTodo,
  updateTodo,
  removeTodo,
  setFilterTodo,
  FilterTodo
}