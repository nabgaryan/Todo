import { useState } from "react";
import AddTodoItem from "./components/addTodoItem/AddTodoItem";
import List from "./components/list/List";


const TodoApp = () => {
  const [listItems, setListItems] = useState([]);
  const onAdd = (value) => {
    if(value.trim()){
    const arr = [value, ...listItems];
    setListItems(arr);
  }
  };

  const onDeleteItem = (value) =>{
    const updated = listItems.filter(item => item !== value);
    setListItems(updated);
  };

  return (
    <div>
      <AddTodoItem onAdd={onAdd} />
      <List onDeleteItem={onDeleteItem} items={listItems}/>
    </div>
  );
};

export default TodoApp;