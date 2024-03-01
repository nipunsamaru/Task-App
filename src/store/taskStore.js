import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  tasks: [],
};

function taskReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    default:
      return state;
  }
}

const store = createStore(taskReducer, applyMiddleware(thunk));

export default store;
