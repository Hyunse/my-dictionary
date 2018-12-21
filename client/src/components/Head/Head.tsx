import React from 'react';
import styled from '../../typed-components';

interface IProps {
  title: string;
}

const Head: React.SFC<IProps> = ({ title }) => (
  <Container>
    <Title>{title}</Title>
  </Container>
);

const Container = styled.header`
  padding-top: 100px;
  padding-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 65px;
  font-weight: 700;
  line-height: 1.2em;
  text-align: center;
`;

export default Head;
