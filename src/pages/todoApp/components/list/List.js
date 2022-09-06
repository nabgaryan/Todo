import ListItem from "../listItem/ListItem";
import SList from "./List.styles";
import React from 'react';

const List = ({ onDeleteItem, items, onChecked, onEdit, onClickSave }) => {
    return (
        <SList>
            {items.map((item, index) => <ListItem onEdit={onEdit}
                index={index} onDeleteItem={onDeleteItem}
                onChecked={onChecked} key={Math.random().toString()} item={item} onClickSave={onClickSave} />)}

        </SList>
    );
};

export default List;