import React from 'react';
import Button from '../../components/Button';
import styled from '../../typed-components';

const Container = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  box-sizing: border-box;

  @media (min-width: 768px) {
    max-width: 1160px;
    margin: 0 auto;
    height: 110px;
    padding: 0 20px;
  }
`;

const Search = styled.div`
  justify-content: center;
`;

const Input = styled.input``;

interface IProps {
  inputRef: React.RefObject<HTMLInputElement>;
  clickSearch: () => void;
}

const NavPresenter: React.SFC<IProps> = ({
  clickSearch,
  inputRef
}) => {
  return (
    <Container>
      <Search>
        <Input type="text" ref={inputRef} />
        <Button name="Search" onClick={clickSearch} />
      </Search>
    </Container>
  );
};

export default NavPresenter;
