import SButton from './Button.style';
import React from 'react';

const Button = (props) => {
    const { children, shape, onClick, color } = props;

    return (
        <SButton color={color} shape={shape} onClick={onClick}>{children}</SButton>
    );
};

export default Button;

{/* <SButton shape={shape} onClick={onClick} children={children}/> */ }
{/* <SButton {...props} /> */ }