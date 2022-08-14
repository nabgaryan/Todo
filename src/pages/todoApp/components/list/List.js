import ListItem from "../listItem/ListItem";
import SList from "./List.styles";

const List = ({onDeleteItem, items, onChecked}) => {
    return (
        <SList>
            {items.map((item, index) => <ListItem  index={index} onDeleteItem={onDeleteItem} onChecked={onChecked} key={Math.random().toString()} item={item} />)}

        </SList>
    );
};

export default List;