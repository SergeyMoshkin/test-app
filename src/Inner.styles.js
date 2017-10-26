import styled, { keyframes } from 'styled-components';

const ContextDiv = styled.div`
  background: ${props => props.background === "Serg" ? "#fcd" : "#63004d"};
  color: ${props => props.background === "Serg" ? "#000" : "#fff"};
  padding: 20px;
`;

export default ContextDiv