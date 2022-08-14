import { useState } from "react";
import SWraper from "./AddTodoItem.styled";
import Button from "../../../../components/button/Button";
import Input from "../../../../components/input/Input";


const AddTodoItem = ({onAdd}) => {
    const [value, setValue] = useState('');

    const onClick = () => {
        onAdd(value);
        setValue('');
    };
    const onChange = (event) => {
        setValue(event.target.value);
        
    };

    return <SWraper>
        <Input value={value} onChange={onChange} placeholder='Add your new todo' />
        <Button onClick={onClick} shape='square' color='blue'>+</Button>
    </SWraper>
};

export default AddTodoItem;