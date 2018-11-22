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

const Fl = styled.div`
  color: #4a7d95;
  display: inline;
  font-family: 'Playfair Display', serif;
  font-size: 26px;
  font-stretch: normal;
  font-style: normal;
  font-weight: bold;
  letter-spacing: 0.5px;
  line-height: 36px;
  text-decoration: none;
`;

const EntryAttr = styled.div`
  font-size: 18px;
  line-height: 22px;
  color: #225f73;
`;

const Vg = styled.div``;

const VgHeader = styled.div`
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  > h2 {
    color: #265667;
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
    font-size: 22px;
    font-stretch: normal;
    font-style: normal;
    font-weight: bold;
    line-height: 26px;
    letter-spacing: 0.3px;
    margin-bottom: 0.5em;
    padding-bottom: 0;
  }
`;

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
      {renderSearchList(searchList)}
    </Container>
  );
};

const renderSearchList = (searchList) => {
  if (searchList !== []) {
    return searchList.map((item, index) => {
      return (
        <DefinitionWrapper key={index}>
          <EntryHeader>
            <SearchWord>{item.hwi.hw}</SearchWord>
            <Fl>{item.fl}</Fl>
            <EntryAttr>
              {item.hwi.prs != null ? `/${item.hwi.prs[0].mw}/` : ''}
            </EntryAttr>
          </EntryHeader>
          <Vg>
            <VgHeader>
              <h2>Definition of {item.meta.id}</h2>
            </VgHeader>
          </Vg>
        </DefinitionWrapper>
      );
    });
  } else {
    return '';
  }
};

export default DefinitionPresenter;
