import ListItem from "../listItem/ListItem";
import SList from "./List.styles";
import React from 'react';

const List = ({onDeleteItem, items, onChecked, onEdit, onAdd}) => {
    return (
        <SList>
            {items.map((item, index) => <ListItem onEdit={onEdit} onAdd={onAdd} index={index} onDeleteItem={onDeleteItem} onChecked={onChecked} key={Math.random().toString()} item={item} />)}

        </SList>
    );
};

export default List;