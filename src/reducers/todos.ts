import { Todo, Action, ActionTypes } from '../actions';

export const todosReducer = (state: Todo[] = [], action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.fetchTodos:
      return payload;
    case ActionTypes.deleteTodo:
      return state.filter((todo) => todo.id !== payload);
    default:
      return state;
  }
};
