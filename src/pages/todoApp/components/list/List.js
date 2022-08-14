import ListItem from "../listItem/ListItem";
import SList from "./List.styles";

const List = (props) => {
    

    return (

        <SList>
            {props.items.map(item => <ListItem key={Math.random().toString()} item={item} />)}

        </SList>
    );
};

export default List;