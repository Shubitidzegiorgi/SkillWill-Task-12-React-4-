import React from 'react';
import ToDoList from './components/ToDoList';
import CompletedList from './components/CompletedList';

class App extends React.Component {
  state = {
    todoTasks: [],
    completedTasks: [],
    newTask: '',
  };

  handleInputChange = (event) => {
    this.setState({ newTask: event.target.value });
  };

  handleAddTask = () => {
    if (this.state.newTask.trim() !== '') {
      this.setState((prevState) => ({
        todoTasks: [...prevState.todoTasks, prevState.newTask],
        newTask: '',
      }));
    }
  };

  handleCompleteTask = (index) => {
    const completedTask = this.state.todoTasks[index];
    this.setState((prevState) => ({
      todoTasks: prevState.todoTasks.filter((_, i) => i !== index),
      completedTasks: [...prevState.completedTasks, completedTask],
    }));
  };

  handleDeleteTask = (index, type) => {
    this.setState((prevState) => ({
      [type]: prevState[type].filter((_, i) => i !== index),
    }));
  };

  handleMoveToToDo = (index) => {
    const task = this.state.completedTasks[index];
    this.setState((prevState) => ({
      completedTasks: prevState.completedTasks.filter((_, i) => i !== index),
      todoTasks: [...prevState.todoTasks, task],
    }));
  };

  render() {
    return (
      <div className="app">
        <div className="task-input">
          <input
            type="text"
            value={this.state.newTask}
            onChange={this.handleInputChange}
            placeholder="Enter a new task"
          />
          <button onClick={this.handleAddTask}>Add Task</button>
        </div>
        <ToDoList
          tasks={this.state.todoTasks}
          onComplete={this.handleCompleteTask} 
        />
        <CompletedList
          tasks={this.state.completedTasks}
          onDelete={(index) => this.handleDeleteTask(index, 'completedTasks')}
          onMoveToToDo={this.handleMoveToToDo}
        />
      </div>
    );
  }
}

export default App;
