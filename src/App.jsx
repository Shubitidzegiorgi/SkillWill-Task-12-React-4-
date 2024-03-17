import React, { useState, useCallback } from "react";
import Backlog from "./components/Backlog";
import DoneItem from "./components/DoneItem";
import { v4 as uuidv4 } from "uuid";
import InProgressitem from "./components/InProgress";
import { Container, ListContainer, ListHeader, Input, SmallButton, Counter} from './styles'

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [toDos, setToDos] = useState([]);
  const [dones, setDones] = useState([]);
  const [InProgress, SetInProgress] = useState([]);
  const [CountToDos, setCountToDos] = useState(0);
  const [CountInProgress, setCountInProgress] = useState(0);
  const [CountDone, setCountDone] = useState(0);

  const onChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };
  

  const addUser = (event) => {
    event.preventDefault();
    const toDo = {
      id: uuidv4(),
      task: inputValue,
    };

    setToDos((prevToDos) => [...prevToDos, toDo]);
    setInputValue("");
    setCountToDos((prevCount) => prevCount + 1);
  };

  const addCompleteTask = useCallback(
    (id) => {
      const done = toDos.find((todo) => todo.id === id);
      const inProgressItem = InProgress.find((inPro) => inPro.id === id);

      if (done) {
        setDones((prevDones) => [...prevDones, done]);
        const updatedToDos = toDos.filter((todo) => todo.id !== id);
        setToDos(updatedToDos);
        setCountToDos((prevCount) => prevCount - 1);
        setCountDone((prevCount) => prevCount + 1);
      }

      if (inProgressItem) {
        setDones((prevDones) => [...prevDones, inProgressItem]);
        const updatedInProgress = InProgress.filter((el) => el.id !== id);
        SetInProgress(updatedInProgress);
        setCountInProgress((prevCount) => prevCount - 1);
        setCountDone((prevCount) => prevCount + 1);
      }
    },
    [toDos, InProgress]
  );

  const removeUser = useCallback(
    (id) => {
      const updatedDones = dones.filter((done) => done.id !== id);
      setDones(updatedDones);
      setCountDone((prevCount) => prevCount - 1);
    },
    [dones]
  );

  const moveInProgress = useCallback(
    (id) => {
      const inProgress = toDos.find((todo) => todo.id === id);
      if (inProgress) {
        SetInProgress((prevInProgress) => [...prevInProgress, inProgress]);
        const updatedToDos = toDos.filter((todo) => todo.id !== id);
        setToDos(updatedToDos);
        setCountInProgress((prevCount) => prevCount + 1);
        setCountToDos((prevCount) => prevCount - 1);
        console.log(inProgress);
      }
    },
    [toDos]
  );

  const returnTodo = useCallback(
    (id) => {
      const todo = dones.find((done) => done.id === id);
      if (todo) {
        setToDos((prevToDos) => [...prevToDos, todo]);
        removeUser(id);
        setCountToDos((prevCount) => prevCount + 1);
      }
    },
    [dones, removeUser]
  );

  return (
    <>
      <form action="" onSubmit={addUser}>
        <Container>
        <h1>Todo List</h1>
        <Input type="text" onChange={onChange} value={inputValue} />
        <SmallButton type="submit"> Add Task</SmallButton>
        </Container>
      </form>

      <Container >
        <ListContainer className="Todo">
          <ListHeader>
            <div>Backlog</div>
            <Counter>{CountToDos}</Counter>
          </ListHeader>
          {toDos.map((todo) => (
            <Backlog
              key={todo.id}
              id={todo.id}
              todo={todo.task}
              action={addCompleteTask}
              moveInProgress={moveInProgress}
            />
          ))}
        </ListContainer>

        <ListContainer className="InProgress">
          <ListHeader>
            <div>In Progress</div>
            <Counter>{CountInProgress}</Counter>
          </ListHeader>
          {InProgress.map((inProgress) => (
            <InProgressitem
              inProgress={inProgress.task}
              key={inProgress.id}
              id={inProgress.id}
              action={addCompleteTask}
            />
          ))}
        </ListContainer>

        <ListContainer className="Done">
        <ListHeader>
            <div>Done</div>
            <Counter>{CountDone}</Counter>
          </ListHeader>
          {dones.map((done) => (
            <DoneItem
              key={done.id}
              id={done.id}
              todo={done.task}
              remove={removeUser}
              returnTodo={returnTodo}
            />
          ))}
        </ListContainer>
      </Container>
    </>
  );
};

export default App;