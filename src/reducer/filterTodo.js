import { FilterTodo } from '../action';

const filterTodoReducer = ( state = FilterTodo.SHOW_ALL, action ) => {
  switch (action.type){
    case 'SET_FILTER_TODO':
      return action.filter
    default:
      return state
  }
}

export default filterTodoReducer