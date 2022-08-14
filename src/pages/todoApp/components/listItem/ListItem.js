import SListItem from "./ListItem.styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackspace, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";



const ListItem = ({ item, onDeleteItem, onChecked, index }) => {
    const {value, checked} = item;
    const handleChange = () => {
        onChecked(index, !checked);
    };

    const onDeletHandler = () => {
        onDeleteItem(item);
    };
    // const {item} = props; 
    return (

        <SListItem checked={checked}>
            <div>
                <input type='checkbox'
                    label="Value 1"
                    value={checked}
                    checked={checked}
                    onChange={handleChange}
                />
                {value}
            </div>
            <FontAwesomeIcon onClick={onDeletHandler} icon={faTrash} />
        </SListItem>
    );
};

export default ListItem;