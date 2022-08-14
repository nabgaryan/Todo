import { useState } from "react";
import AddTodoItem from "./components/addTodoItem/AddTodoItem";


const TodoApp = () => {
const [listItems, setListItems] = useState([]);
const onAdd = (value) => {
  const arr = [value, ...listItems];

  setListItems(arr);
};

console.log(listItems);
    return (
      <AddTodoItem onAdd={onAdd}/>
    );
};

export default TodoApp;