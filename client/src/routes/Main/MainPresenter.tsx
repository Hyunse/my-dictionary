import React from 'react';
import { Route } from 'react-router-dom';
import styled from '../../typed-components';
import Definition from '../Definition';
import Home from '../Home';
import Nav from '../Nav';

interface IProps {
  url: string;
}

const MainPresenter: React.SFC<IProps> = ({ url }) => {
  return (
    <Container>
      <Header>
        <Nav />
      </Header>
      <Route exact={true} path={`${url}`} component={Home} />
      <Route path={`${url}dictionary/:searchValue`} component={Definition} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1165px;
  height: 100vh;
  padding-left: 30px;
  padding-right: 30px;
  margin: auto;
`;

const Header = styled.div`
  position: fixed;
  width: 100%;
  z-index: 5;
  top: 0;
  left: 0;
  background-color: #2d5f7c;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  -moz-transition: left 0.3s ease-in-out;
  -ms-transition: left 0.3s ease-in-out;
  -o-transition: left 0.3s ease-in-out;
  -webkit-transition: left 0.3s ease-in-out;
  transition: left 0.3s ease-in-out;
`;

export default MainPresenter;