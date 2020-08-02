import React from 'react';
import styled from '../../typed-components';

interface IProps {
}

const Footer: React.SFC<IProps> = () => (
  <Container>
    Footer
  </Container>
);

const Container = styled.div`
  bottom: 0;
  width: 100%;
  height: 100px;
  background-color: #0000;
  color: #0000;
`;

export default Footer;
