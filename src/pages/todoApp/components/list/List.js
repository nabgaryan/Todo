import ListItem from "../listItem/ListItem";
import SList from "./List.styles";

const List = ({onDeleteItem, items}) => {
    return (
        <SList>
            {items.map(item => <ListItem onDeleteItem={onDeleteItem} key={Math.random().toString()} item={item} />)}

        </SList>
    );
};

export default List;