import { ListItem, ActionButton } from "../styles";
const InProgressitem= ({ inProgress,action, id}) => {
    return (
      <ListItem>
      <p>{inProgress}</p>
      <ActionButton onClick={() => action(id)}>Complete</ActionButton>
    </ListItem>
    )
  };
  
  export default InProgressitem;
  