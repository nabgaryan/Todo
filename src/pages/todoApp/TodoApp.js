import { useState } from "react";
import AddTodoItem from "./components/addTodoItem/AddTodoItem";
import List from "./components/list/List";
import React from 'react';


const TodoApp = () => {
  const [listItems, setListItems] = useState([]);

  // {value: string, checked: boolean}
  const onAdd = (value) => {
    if (value.trim()) {
      setListItems((previousState) => {
        return [{ value, checked: false, isEditing: false, ckliked: false }, ...previousState];
      });
    }
  };

  const onChecked = (index, checked) => {
    setListItems((previousState) => {
      let arr = [...previousState];
      arr[index].checked = checked;
    });
  };

  const onEdit = (index, isEditing) => {
    setListItems((previousState) => {
      let arr = [...previousState];
      arr[index].isEditing = isEditing;
    });

  };

  const onCklikSave = (index, ckliked, editFieldText) => {
  
    setListItems((previousState) => {
      let arr = [...previousState];
      arr[index].value = editFieldText;
      arr[index].ckliked = ckliked;    });
  };

  const onDeleteItem = (element) => {
    const updated = listItems.filter(item => item.value !== element.value);
    setListItems((prevState) => updated);
  };


  return (
    <div>
      <AddTodoItem onAdd={onAdd} />
      <List onCklikSave={onCklikSave} onEdit={onEdit} onChecked={onChecked} onDeleteItem={onDeleteItem} items={listItems} />
    </div>
  );
};

export default TodoApp;