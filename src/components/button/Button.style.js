import styled from 'styled-components';

const SButton = styled.button`
 border-radius: ${props => props.shape === 'circle' ? "50%" : '4px'};
 height: 40px;
 width: ${props => props.shape === 'square' ? "40px" : '100px'};
 background-color: ${props => props.color === 'blue' ? 'lightblue' : 'red'}; 
 border: 1px solid ${props => props.color === 'blue' ? 'lightblue' : 'red'};
 color: white;
 font-size: 18px;
`;

export default SButton;