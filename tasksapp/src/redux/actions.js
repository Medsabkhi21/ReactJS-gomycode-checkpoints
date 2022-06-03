import { ADD_TASK, TOGGLE_TASK, SET_FILTER } from "./actionTypes";

let nextTaskId = 0;

export const addTask = content => ({
  type: ADD_TASK,
  payload: {
    id: ++nextTaskId,
    content
  }
});

export const toggleTask = id => ({
  type: TOGGLE_TASK,
  payload: { id }
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
