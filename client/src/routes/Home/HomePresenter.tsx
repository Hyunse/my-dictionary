import React from 'react';
import styled from '../../typed-components';

interface IProps {}

const HomePresenter: React.SFC<IProps> = () => {
  return <Container>Home</Container>;
};

const Container = styled.div`
  margin-top: 110px;
  padding-top: 30px;
  padding-right: 15px;
  padding-left: 15px;
`;

export default HomePresenter;
