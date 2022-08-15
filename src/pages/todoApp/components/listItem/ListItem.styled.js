import styled from 'styled-components';

const SListItem = styled.li`
display: flex;
padding: 4px 10px;
height: 40px;
border-radius: 4px;
margin-bottom: 5px;
background-color: #E8E8E8;
align-items: center;
justify-content: space-between;
.fa-trash{
    color: red;
    margin-left: 10px;
    cursor: pointer;
}
.svg-inline--fa.fa-pen-to-square {
color: #ADD8E6;
cursor: pointer;
}
text-decoration: ${props => (props.checked ? "line-through" : "none")};
`;

export default SListItem;