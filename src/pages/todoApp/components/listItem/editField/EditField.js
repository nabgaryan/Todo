import SEditField from './EditField.styles';
import React from 'react';

const EditField = ({value, onChange}) => {


    return (
        <SEditField value={value} onChange={onChange} placeholder='Write your text here'/>
    );
};

export default EditField;