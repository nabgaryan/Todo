import SListItem from "./ListItem.styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackspace, faTrash } from '@fortawesome/free-solid-svg-icons';
import EditField from "./editField/EditField";
import { useState } from 'react';
import React from 'react';



const ListItem = ({ item, onDeleteItem, onChecked, index, onEdit }) => {
    const [editedValue, setEditedValue] = useState('');

    const { value, checked, isEditing } = item;
    const handleChange = () => {
        onChecked(index, !checked);
    };

    const onDeletHandler = () => {
        onDeleteItem(item);
    };

    const onEditHandler = () => {
        onEdit(index, !isEditing);
        
    };

    if(isEditing){
        return <EditField />;
    }

// const {item} = props; 
return (
    <div>
        {/* <EditField onChange={onEditHandler} isEditing/> */}
        <SListItem checked={checked} >
            <div>
                <input type='checkbox'
                    label="Value 1"
                    value={checked}
                    checked={checked}
                    onChange={handleChange}
                />
                {value}
            </div>
            <div>
                <FontAwesomeIcon onClick={onEditHandler} icon="fa-solid fa-pen-to-square" />
                <FontAwesomeIcon onClick={onDeletHandler} icon={faTrash} />
            </div>
        </SListItem>
    </div>
);
};

export default ListItem;