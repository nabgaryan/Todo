import SInput from './Input.style';

const Input = (props) => {
    const { value, onChange, placeholder } = props;

    return (
        <SInput value={value} onChange={onChange} placeholder={placeholder} />
    );
};

export default Input;