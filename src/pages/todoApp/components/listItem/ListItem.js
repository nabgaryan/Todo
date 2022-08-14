import SListItem from "./ListItem.styled";


const ListItem = ({item}) => {
// const {item} = props; 
    return (
        <SListItem>
            {item}
        </SListItem>
    );
};

export default ListItem;