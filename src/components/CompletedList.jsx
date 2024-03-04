import React from 'react';
import Task from './Task';

class CompletedList extends React.Component {
  render() {
    const { tasks, onDelete, onMoveToToDo } = this.props;

    return (
      <div className="completed-list">
        <h2>Completed Tasks</h2>
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            onDelete={() => onDelete(index)}
            onMoveToToDo={() => onMoveToToDo(index)}
            showFinishButton={false}
          />
        ))}
      </div>
    );
  }
}

export default CompletedList;
