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
}
text-decoration: ${props => (props.checked ? "line-through" : "none")};
`;

export default SListItem;