import React from 'react';
import styled from '../../typed-components';
import Definition from '../../components/Definition';

interface IProps {
  saveWords: any;
  clickDelete?: (e: any) => void;
}

const SavedWordsPresenter: React.SFC<IProps> = ({ saveWords, clickDelete }) => {
  return (
    <Container>
      <Header>Saved Words</Header>
      <SavedWords>
        {saveWords &&
          saveWords.map((item, index) => {
            return (
              <Definition
                item={JSON.parse(item.word)}
                key={index}
                index={item.id}
                showSave={false}
                clickDelete={clickDelete}
              />
            );
          })}
      </SavedWords>
    </Container>
  );
};

export default SavedWordsPresenter;

const Container = styled.div`
  margin-top: 110px;
  padding-top: 30px;
  padding-right: 15px;
  padding-left: 15px;

  @media (max-width: 750px) {
    margin-top: 82px;
  }
`;

const Header = styled.header`
  color: #303336;
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  font-stretch: normal;
  font-style: normal;
  font-weight: bold;
  letter-spacing: 1.2px;
  line-height: 50px;
  padding-right: 15px;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  word-wrap: break-word;
  text-align: center;
`;

const SavedWords = styled.div`
  display: block;
  margin-top: 50px;

  @media (max-width: 750px) {
    margin-top: 30px;
  }
`;
