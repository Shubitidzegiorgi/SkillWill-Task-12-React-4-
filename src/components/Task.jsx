import React from 'react';
import '../App.css';

const Task = ({ task, onComplete, onDelete, onMoveToToDo, showFinishButton }) => {
  return (
    <div className="task">
      <span>{task}</span>
      {showFinishButton && <button className="finish-btn" onClick={onComplete}>Done</button>}
      {!showFinishButton && <button className="delete-btn" onClick={onDelete}>Delete</button>}
      {!showFinishButton && <button className="move-btn" onClick={onMoveToToDo}>Move to To Do</button>}
    </div>
  );
};

export default Task;