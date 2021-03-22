import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { Todo } from '../actions/todos';

export interface StoreState {
  todos: Todo[];
}

export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
});

//Redux store obj would like...
// {
//   todos: [Todo, Todo, Todo]
// }
