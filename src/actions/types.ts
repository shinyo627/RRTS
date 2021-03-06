import { FetchTodosAction, DeleteTodoAction } from './todos';

export enum ActionTypes {
  // The only requirement of a type in a redux action is that
  // it must be some unique value in theory. EXAMPLE )A unique string
  // In typescript, you just declare variable with names alone, it's assigned automatically with number from 0
  fetchTodos, // === 0 in TS
  deleteTodo,
}

// This is type union for all interfaces related to redux actions
export type Action = FetchTodosAction | DeleteTodoAction;
