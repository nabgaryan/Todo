import SListItem from "./ListItem.styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackspace, faTrash } from '@fortawesome/free-solid-svg-icons';
import EditField from "./editField/EditField";
import { useState } from 'react';



const ListItem = ({ item, onDeleteItem, onChecked, onEdit, index }) => {
    const [isEdit, setIsedit] = useState(false);

    const { value, checked } = item;
    const handleChange = () => {
        onChecked(index, !checked);
    };

    const onDeletHandler = () => {
        onDeleteItem(item);
    };

    const onEditHandler = (value, checked) => {
        onEdit(index, );

    };
if(isEdit){
    return <EditField />;
}


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
            <div>
                <FontAwesomeIcon onClick={onEditHandler} icon="fa-solid fa-pen-to-square" />
                <FontAwesomeIcon  onClick={onDeletHandler} icon={faTrash} />
            </div>
        </SListItem>
);
};

export default ListItem;