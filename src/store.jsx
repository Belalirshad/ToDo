import { createStore } from 'redux';

const initialState = {
  tasks: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.task] };
    case 'DELETE_TASK':
      return { ...state, tasks: state.tasks.filter(task => task.id !== action.id) };
    case 'EDIT_TASK':
      return { ...state, tasks: state.tasks.map(task => task.id === action.id ? { ...task, text: action.text } : task) };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;