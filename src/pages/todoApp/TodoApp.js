import { useState } from "react";
import AddTodoItem from "./components/addTodoItem/AddTodoItem";
import List from "./components/list/List";
import ListItem from "./components/listItem/ListItem";


const TodoApp = () => {
  const [listItems, setListItems] = useState([]);
  const onAdd = (value) => {
    if(value.trim()){
    const arr = [value, ...listItems];

    setListItems(arr);
  }
  };

  return (
    <div>
      <AddTodoItem onAdd={onAdd} />
      <List items={listItems}/>
    </div>
  );
};

export default TodoApp;