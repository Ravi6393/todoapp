import React from 'react';
import TaskInput from './component/TaskInput';
import TaskList from './component/TaskList';

const App = () => {
  return (
    <div className="app">
      <h1>React To-Do App</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;
