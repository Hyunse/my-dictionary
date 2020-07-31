import React from 'react';
import styled from '../../typed-components';

interface IProps {
}
const SavedWordsPresenter: React.SFC<IProps> = ({
}) => {
  return (
    <Container>
      SavedWords
    </Container>
  );
};

export default SavedWordsPresenter;

const Container = styled.div`
  margin-top: 110px;
  padding-top: 30px;
  padding-right: 15px;
  padding-left: 15px;
`;
