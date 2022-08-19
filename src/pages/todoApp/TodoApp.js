import { useState } from "react";
import AddTodoItem from "./components/addTodoItem/AddTodoItem";
import List from "./components/list/List";

const TodoApp = () => {
  const [listItems, setListItems] = useState([]); // {value: string, checked: boolean}
  const onAdd = (value) => {
    if(value.trim()){
    const arr = [{value, checked: false, isEditing: false}, ...listItems];
    setListItems(arr);
  }
  };
  const onChecked = (index, checked) =>{
    let arr = [...listItems];
    arr[index].checked = checked;
    setListItems(arr);
  };

const onEdit = (index, isEditing) =>{
  let arr = [...listItems];
  arr[index].isEditing=false;
};

  const onDeleteItem = (element) =>{
    const updated = listItems.filter(item => item.value !== element.value);
    setListItems(updated);
  };

  return (
    <div>
      <AddTodoItem onAdd={onAdd} />
      <List onEdit={onEdit} onChecked={onChecked} onDeleteItem={onDeleteItem} items={listItems}/>
    </div>
  );
};

export default TodoApp;