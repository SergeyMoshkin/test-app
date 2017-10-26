import styled, { keyframes } from 'styled-components';

const logoAnimation = keyframes`
  from { 
    transform: rotate(0deg); 
  }
  to {
    transform: rotate(360deg); 
  }
`;
const Main = styled.div`
  text-align: center;
`;
const Header = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;
const Logo = styled.img`
  animation: ${logoAnimation} infinite 20s linear;
  height: 80px;
`;
const Title = styled.h1`
  font-size: 1.5em;
`;
const Intro = styled.p`
  font-size: large;
`;

export {
  Main,
  Header,
  Logo,
  Title,
  Intro
}