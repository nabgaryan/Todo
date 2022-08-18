import SInput from './Input.style';
import React from 'react';

const Input = (props) => {
    const { value, onChange, placeholder } = props;

    return (
        <SInput value={value} onChange={onChange} placeholder={placeholder} />
    );
};

export default Input;