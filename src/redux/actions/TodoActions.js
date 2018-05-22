/**
 * Created by Victor on 22/05/2018.
 */
import * as types from './actionsTypes';

export function addTodoAction(todoText) {
  return {
    type: types.ADD_TODO,
    payload: todoText
  }
}