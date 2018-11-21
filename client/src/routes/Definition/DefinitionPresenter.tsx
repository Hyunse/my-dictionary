import React from 'react';
import styled from '../../typed-components';

const Container = styled.div`
  margin-top: 110px;
  padding-top: 30px;
  padding-right: 15px;
  padding-left: 15px;
`;

const Title = styled.div`
  text-align: center;

  > h1 {
    font-size: 120px;
    color: #265667;
  }
`;

const EntryHeader = styled.div`
  margin-bottom: 6px;
`;

const SearchWord = styled.h1`
  color: #303336;
  display: inline;
  font-family: 'Playfair Display', serif;
  font-size: 48px;
  font-stretch: normal;
  font-style: normal;
  font-weight: bold;
  letter-spacing: 1.2px;
  line-height: 50px;
  padding-right: 15px;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  word-wrap: break-word;
`;

const DefinitionWrapper = styled.div``;

interface IProps {
  searchList: any;
  searchValue: string;
}
const DefinitionPresenter: React.SFC<IProps> = ({
  searchList,
  searchValue
}) => {
  return (
    <Container>
      <Title>
        <SearchWord>{searchValue}</SearchWord>
      </Title>
      <DefinitionWrapper>{renderSearchList(searchList)}</DefinitionWrapper>
    </Container>
  );
};

const renderSearchList = (searchList) => {
  if (searchList !== []) {
    return searchList.map((item, index) => {
      return (
        <EntryHeader key={index}>
          <SearchWord>{item.hwi.hw}</SearchWord>
        </EntryHeader>
      );
    });
  } else {
    return '';
  }
};

export default DefinitionPresenter;
