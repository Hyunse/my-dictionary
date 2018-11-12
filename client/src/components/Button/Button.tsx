import React from 'react';
import styled from '../../typed-components';

const Container = styled.button`
`;


interface IProps {
  name?: string;
  onClick: () => void;
}

const Button: React.SFC<IProps> = ({ name, onClick }) => (
  <Container onClick={onClick}>
    {name}
  </Container>
);

export default Button;