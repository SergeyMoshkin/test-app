import styled, { keyframes } from 'styled-components';

const ContextDiv = styled.div`
  background: ${props => props.background === "Loh" ? "#fcd" : "#63004d"};
  color: ${props => props.background === "Loh" ? "#000" : "#fff"};
  padding: 20px;
`;

export default ContextDiv