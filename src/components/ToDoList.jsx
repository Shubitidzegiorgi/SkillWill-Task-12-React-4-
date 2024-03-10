import React from 'react';
import Task from './Task';

const ToDoList = React.memo(({ tasks, onComplete }) => {
  return (
    <div className="todo-list">
      <h2>To Do Tasks</h2>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onComplete={() => onComplete(index)} showFinishButton={true} />
      ))}
    </div>
  );
});

export default ToDoList;
