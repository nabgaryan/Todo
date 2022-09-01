import React, { useState } from 'react';
import SListItem from "./ListItem.styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackspace, faTrash } from '@fortawesome/free-solid-svg-icons';
import EditField from "./editField/EditField";
import Button from "../../../../components/button/Button";



const ListItem = ({ item, onDeleteItem, onChecked, index, onEdit, onCklikSave }) => {
    const [editFieldText, setEditFieldText] = useState('');

    let { value, checked, isEditing,  ckliked} = item;

    const handleChange = () => {
        onChecked(index, !checked);
    };

    const onDeletHandler = () => {
        onDeleteItem(item);
    };

    const onEditHandler = () => {
        onEdit(index, !isEditing, editFieldText);

    };

    const onChangeText = (event) => {
     setEditFieldText(event.target.value);

    };

    const onClickSaveHandler = () => {
        onCklikSave(index, !ckliked, editFieldText);
         
    };

    if (ckliked) {
        return (
            <div>
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
    }

    if (isEditing) {
        return (
            <div >
                <EditField value={editFieldText} onChange={onChangeText} />
                <Button inline='inline' onClick={onClickSaveHandler} >Save</Button>
                <Button inline='inline'>Cancel</Button>
            </div>
        );
    }

    return (
        <div>
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