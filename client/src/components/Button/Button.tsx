import React from 'react';
import styled from '../../typed-components';

interface IProps {
  name?: string;
  onClick: () => void;
}

const Button: React.SFC<IProps> = ({ name, onClick }) => (
  <Container onClick={onClick}>{name}</Container>
);

const Container = styled.button`
  font-family: 'OpenSans', sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #2d5f7c;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
`;

export default Button;
