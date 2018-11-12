import React from 'react';
import Head from '../../components/Head';
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

interface IProps {
  searchList: any;
}

const MainPresenter: React.SFC<IProps> = ({ searchList }) => {
  return (
    <Container>
      <NavContainer />
      <Head title="My Dictionary" />
      {searchList === []
        ? ''
        : searchList.map((item) => {
            return <div key={item.meta.id}>{item.meta.id}</div>;
          })}
    </Container>
  );
};

export default MainPresenter;
