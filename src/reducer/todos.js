const todosReducer = (state = [], action) => {
  switch (action.type){
    case 'ADD_TODO': 
      return [...state, { id: action.id, name: action.name, completed: action.completed }]
    case 'UPDATE_TODO':
      return state.map(item => item.id === action.id ? { ...item, completed: !item.completed } : item)
    case 'REMOVE_TODO':
      return state.filter(item => item.id !== action.id)
    default:
      return state
  }
}

export default todosReducer