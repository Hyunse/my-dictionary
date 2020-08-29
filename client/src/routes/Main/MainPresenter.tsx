import React from 'react';
import { Route } from 'react-router-dom';
import styled from '../../typed-components';
import Definition from '../Definition';
import Game from '../Game';
import Home from '../Home';
import Nav from '../Nav';
import SavedWords from '../../routes/SavedWords';
import Footer from '../../components/Footer';

interface IProps {
  url: string;
}

const MainPresenter: React.SFC<IProps> = ({ url }) => {
  return (
    <>
      <Container>
        <Header>
          <Nav />
        </Header>
        <Route exact={true} path={`${url}`} component={Home} />
        <Route path={`${url}dictionary/:searchValue`} component={Definition} />
        <Route path={'/savedwords'} component={SavedWords} />
        <Route path={'/game'} component={Game} />
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.div`
  margin-left: 200px;
  margin-right: 200px;

  @media (max-width: 750px) {
    margin-left: 15px;
    margin-right: 15px;
  }
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

  @media (max-width: 750px) {
    position: absolute;
  }
`;

export default MainPresenter;
