import React from "react";
import { ListItem, Button } from "../styles";

const DoneItem = ({ todo, remove, returnTodo, id }) => {
    return (
      <ListItem>
      <p>{todo}</p>
      <Button onClick={() => remove(id)}>Remove</Button>
      <Button onClick={() => returnTodo(id)}>Return To Backlog</Button>
    </ListItem>
    );
  };
  
  export default React.memo(DoneItem);
  