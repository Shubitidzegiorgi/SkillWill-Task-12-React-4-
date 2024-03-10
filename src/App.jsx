import React, { useState, useCallback } from 'react';
import ToDoList from './components/ToDoList';
import CompletedList from './components/CompletedList';

const App = () => {
  const [todoTasks, setTodoTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTodoTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask('');
    }
  };

  const handleCompleteTask = useCallback((index) => {
    const completedTask = todoTasks[index];
    setTodoTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
    setCompletedTasks((prevTasks) => [...prevTasks, completedTask]);
  }, [todoTasks]);

  const handleDeleteTask = useCallback((index, type) => {
    if (type === 'completedTasks') {
      setCompletedTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
    } else {
      setTodoTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
    }
  }, []);

  const handleMoveToToDo = useCallback((index) => {
    const task = completedTasks[index];
    setCompletedTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
    setTodoTasks((prevTasks) => [...prevTasks, task]);
  }, [completedTasks]);

  return (
    <div className="app">
      <div className="task-input">
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a new task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ToDoList tasks={todoTasks} onComplete={handleCompleteTask} />
      <CompletedList
        tasks={completedTasks}
        onDelete={(index) => handleDeleteTask(index, 'completedTasks')}
        onMoveToToDo={handleMoveToToDo}
      />
    </div>
  );
};

export default App;