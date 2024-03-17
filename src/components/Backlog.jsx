import React from "react";
import { ListItem, ActionButton } from "../styles"; 

const Backlog = ({ todo, action, id, moveInProgress }) => {
  return (
    <ListItem>
      <p>{todo}</p>
      <ActionButton onClick={() => action(id)}>Complete</ActionButton>
      <ActionButton secondary onClick={() => moveInProgress(id)}>InProgress</ActionButton>
    </ListItem>
  );
};

export default React.memo(Backlog);
