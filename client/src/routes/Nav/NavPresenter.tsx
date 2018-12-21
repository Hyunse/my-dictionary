import React from 'react';
import styled from '../../typed-components';

const Container = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  box-sizing: border-box;

  > svg {
    flex: 0 0 120px;
    height: 50%;
    fill: #f5f6fa;
  }

  @media (min-width: 768px) {
    max-width: 1160px;
    margin: 0 auto;
    height: 110px;
    padding: 0 20px;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  background: none;
  box-shadow: none;
  position: static;
  flex-wrap: wrap;
  align-self: flex-start;
`;

const Search = styled.div`
  left: 0;
  position: relative;
  width: 100%;
  overflow: visible;
  padding-top: 2px;

  > svg {
    right: 10px;
    top: 0;
    fill: #c23616;
    position: absolute;
    width: 27px;
    height: 100%;
    cursor: pointer;
    border: none;
    z-index: 2;
  }

  @media (min-width: 768px) {
    background: none;
    box-shadow: none;
    flex-wrap: wrap;
  }
`;

const Input = styled.input`
  display: block;
  width: 100%;
  color: #0a1b27;
  font-size: 1.25em;
  font-weight: 300;
  overflow: hidden;
  padding: 0.3em 80px 0.3em 1em;
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  border: 1px solid #b1b9bf;
  box-sizing: border-box;

  @media (min-width: 768px) {
    height: 45px;
  }
`;

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  height: 27px;
  padding-bottom: 2px;
  margin-top: 0.3em;
`;

const NavList = styled.ul`
  list-style-type: none;
`;

const NavItem = styled.li`
  display: inline;
  position: relative;

  > a {
    color: #e4e4e4;
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
    letter-spacing: 0.0625em;
    padding: 0 0.6875em;
    text-decoration: none;
    cursor: pointer;
  }
`;

interface IProps {
  clickSearch: () => void;
  clickLogout: () => void;
  handleKeyPress: (e) => void;
  logined: boolean;
  inputRef: React.RefObject<HTMLInputElement>;
}

const NavItems = (logined: boolean, clickLogout: () => void) => {
  if (!logined) {
    return (
      <NavItem>
        <a href="/login">Login</a>
      </NavItem>
    );
  }

  return (
    <NavItem>
      <a href="#" onClick={clickLogout}>
        Logout
      </a>
    </NavItem>
  );
};

const NavPresenter: React.SFC<IProps> = ({
  clickSearch,
  clickLogout,
  handleKeyPress,
  logined,
  inputRef
}) => {
  return (
    <Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M23 5v13.883l-1 .117v-16c-3.895.119-7.505.762-10.002 2.316-2.496-1.554-6.102-2.197-9.998-2.316v16l-1-.117v-13.883h-1v15h9.057c1.479 0 1.641 1 2.941 1 1.304 0 1.461-1 2.942-1h9.06v-15h-1zm-12 13.645c-1.946-.772-4.137-1.269-7-1.484v-12.051c2.352.197 4.996.675 7 1.922v11.613zm9-1.484c-2.863.215-5.054.712-7 1.484v-11.613c2.004-1.247 4.648-1.725 7-1.922v12.051z" />
      </svg>
      <SearchContainer>
        <Navbar>
          <NavList>{NavItems(logined, clickLogout)}</NavList>
        </Navbar>
        <Search>
          <Input type="text" ref={inputRef} onKeyPress={handleKeyPress} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            onClick={clickSearch}
          >
            <path d="M23.822 20.88l-6.353-6.354c.93-1.465 1.467-3.2 1.467-5.059.001-5.219-4.247-9.467-9.468-9.467s-9.468 4.248-9.468 9.468c0 5.221 4.247 9.469 9.468 9.469 1.768 0 3.421-.487 4.839-1.333l6.396 6.396 3.119-3.12zm-20.294-11.412c0-3.273 2.665-5.938 5.939-5.938 3.275 0 5.94 2.664 5.94 5.938 0 3.275-2.665 5.939-5.94 5.939-3.274 0-5.939-2.664-5.939-5.939z" />
          </svg>
        </Search>
      </SearchContainer>
    </Container>
  );
};

export default NavPresenter;
