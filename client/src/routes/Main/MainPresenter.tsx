import React from 'react';
import styled from '../../typed-components';
import NavContainer from '../Nav';

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

const BodyContainer = styled.div`
  margin-top: 110px;
  padding-top: 30px;
  padding-right: 15px;
  padding-left: 15px;
`;

interface IProps {
  searchList: any;
  searchValue: string;
}

const MainPresenter: React.SFC<IProps> = ({ searchList, searchValue }) => {
  return (
    <Container>
      <Header>
        <NavContainer />
      </Header>
      <BodyContainer>
        Search Value : {searchValue}
        {searchList === []
          ? ''
          : searchList.map((item) => {
              return <div key={item.meta.id}>{item.meta.id}</div>;
            })}
      </BodyContainer>
    </Container>
  );
};

export default MainPresenter;
