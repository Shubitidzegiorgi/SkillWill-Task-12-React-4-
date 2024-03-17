import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 3px solid 
  #D9D9D9;
  box-shadow:10px 10px 10px  #D9D9D9 ;
  border-radius: 10px;
  padding: 15px; 
  margin-bottom: 20px;
`;

export const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const ListHeader = styled.h2`
  color: #333;
  font-size: 1.2rem;
  border-bottom: 2px solid #00AF02;
  padding-bottom: 5px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ListItem = styled.li`
  background-color: #f8f8f8;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-left:6px solid #4caf50;
`;

export const Button = styled.button`
  background-color: ${(props) => (props.secondary ? "#007bff" : "#4caf50")};
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.secondary ? "#0056b3" : "#45a049")};
  }
`;

export const ActionButton = styled(Button)`
  background-color: "#4caf50";

  &:hover {
    background-color: ${(props) => (props.secondary ? "#0056b3" : "#45a049")};
  }
`;

export const Input = styled.input`
  padding: 5px;
  font-size: 20px; 
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 40px; 
  width: 200px;
`;

export const SmallButton = styled(Button)`
  padding: 3px 6px; 
  font-size: 16px; 
  height: 50px; 
  width: 212px;
  margin-top: 12px;
`;

export const Counter = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
`;