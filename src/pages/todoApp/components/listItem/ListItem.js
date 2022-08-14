import SListItem from "./ListItem.styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackspace, faTrash } from '@fortawesome/free-solid-svg-icons';


const ListItem = ({item, onDeleteItem}) => {
    
    const onDeletHandler = () =>{
        onDeleteItem(item);
    };
// const {item} = props; 
    return (
        <SListItem>
            {item}
            <FontAwesomeIcon onClick={onDeletHandler} icon={faTrash} />
        </SListItem>
    );
};

export default ListItem;