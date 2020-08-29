import React from 'react';
import styled from '../../typed-components';
import Definition from '../../components/Definition';

interface IProps {
  searchList: any;
  clickSave?: (e: any) => void;
}
const DefinitionPresenter: React.SFC<IProps> = ({ searchList, clickSave }) => {
  return (
    <Container>
      {searchList !== [] && typeof searchList[0] === 'object'
        ? renderSearchList(searchList, clickSave)
        : recommandList(searchList)}
    </Container>
  );
};

const renderSearchList = (searchList, clickSave) => {
  if (searchList !== []) {
    return searchList.map((item, index) => {
      return (
        <Definition
          item={item}
          key={index}
          index={index}
          showSave={true}
          clickSave={clickSave}
        />
      );
    });
  } else {
    return '';
  }
};

const recommandList = (searchList) => {
  return (
    <div>
      <NotFound>Can't find the word.</NotFound>
      <RecommandWords>
        {searchList.map((item) => {
          return ` ${item}`;
        })}
        ?
      </RecommandWords>
    </div>
  );
};

const Container = styled.div`
  margin-top: 110px;
  padding-top: 30px;
  padding-right: 15px;
  padding-left: 15px;
`;

const NotFound = styled.div`
  color: #265667;
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  font-size: 2rem;
  font-stretch: normal;
  font-style: normal;
  font-weight: bold;
  line-height: 26px;
  letter-spacing: 0.3px;
  margin-bottom: 0.5em;
  padding-bottom: 0;
`;

const RecommandWords = styled.span`
  font-weight: bold;
`;

export default DefinitionPresenter;
