import { combineReducers } from 'redux';
import todosReducer from './todos';
import filterTodoReducer from './filterTodo';

export default combineReducers({todosReducer, filterTodoReducer})