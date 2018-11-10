import React from 'react';
import Button from '../../components/Button';
import Head from '../../components/Head';
import styled from '../../typed-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1135px;
  height: 100vh;
  padding-left: 30px;
  padding-right: 30px;
  margin: auto;
`;

const Search = styled.div`
  display: flex;
  justify-content: center;
`;

const Input = styled.input``;

// const Div = styled.div``;

interface IProps {
  inputRef: React.RefObject<HTMLInputElement>;
  searchList: any;
  clickSearch: () => void;
}

const MainPresenter: React.SFC<IProps> = ({
  clickSearch,
  inputRef,
  searchList
}) => {
  return (
    <Container>
      <Head title="My Dictionary" />
      <Search>
        <Input type="text" ref={inputRef} />
        <Button name="Search" onClick={clickSearch} />
      </Search>
      {searchList === []
        ? ''
        : searchList.map((item) => {
            return <div key={item.meta.id}>{item.meta.id}</div>;
          })}
    </Container>
  );
};
export default MainPresenter;
