import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask, editTask } from '../redux/actions';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggleTask = (id) => {
    dispatch(toggleTask(id));
  };

  const handleEditTask = (id) => {
    const newTask = prompt("Edit your task:");
    if (newTask) {
      dispatch(editTask(id, newTask));
    }
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className={task.completed ? 'completed' : ''}>
          <span onClick={() => handleToggleTask(task.id)}>{task.task}</span>
          <button className="edit" onClick={() => handleEditTask(task.id)}>Edit</button>
          <button className="delete" onClick={() => handleDeleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
