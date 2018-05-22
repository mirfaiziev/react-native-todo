/**
 * Created by Victor on 22/05/2018.
 */

import * as types from '../actions/actionsTypes'

const initialState = {
  todoList: []
};

export default function todo(state=initialState, action) {
  switch (action.type) {
    case types.ADD_TODO:
      return state;
    default:
      return state
  }
}