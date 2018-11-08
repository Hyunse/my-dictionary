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

interface IProps {
  inputRef: React.RefObject<HTMLInputElement>;
  clickSearch: () => void;
}

const MainPresenter: React.SFC<IProps> = ({ clickSearch, inputRef }) => (
  <Container>
    <Head title="My Dictionary" />
    <Search>
      <Input type="text" ref={inputRef} />
      <Button name="Search" onClick={clickSearch} />
    </Search>
  </Container>
);
export default MainPresenter;
