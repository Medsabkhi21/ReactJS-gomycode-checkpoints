import React from "react";
import { connect } from "react-redux";
import Task from "./Task";
// import { getTodos } from "../redux/selectors";
import { getTasksByVisibilityFilter } from "../redux/selectors";
import { VISIBILITY_FILTERS } from "../constants";

const TaskList = ({ tasks }) => (
  <ul className="task-list">
    {tasks && tasks.length
      ? tasks.map((task, index) => {
          return <Task key={`task-${task.id}`} task={task} />;
        })
      : "No task, yay!"}
  </ul>
);

// const mapStateToProps = state => {
//   const { byIds, allIds } = state.todos || {};
//   const todos =
//     allIds && state.todos.allIds.length
//       ? allIds.map(id => (byIds ? { ...byIds[id], id } : null))
//       : null;
//   return { todos };
// };

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  const tasks = getTasksByVisibilityFilter(state, visibilityFilter);
  return { tasks };
  //   const allTodos = getTodos(state);
  //   return {
  //     todos:
  //       visibilityFilter === VISIBILITY_FILTERS.ALL
  //         ? allTodos
  //         : visibilityFilter === VISIBILITY_FILTERS.COMPLETED
  //           ? allTodos.filter(todo => todo.completed)
  //           : allTodos.filter(todo => !todo.completed)
  //   };
};
// export default TodoList;
export default connect(mapStateToProps)(TaskList);
