import React from 'react';
import Task from './Task';

class ToDoList extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.tasks !== nextProps.tasks;
  }

  render() {
    const { tasks, onComplete } = this.props;

    return (
      <div className="todo-list">
        <h2>To Do Tasks</h2>
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            onComplete={() => onComplete(index)}
            showFinishButton={true}
          />
        ))}
      </div>
    );
  }
}

export default ToDoList;

