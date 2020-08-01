import React from 'react';
import styled from '../../typed-components';

interface IProps {
  item: any,
  index: number,
  showSave: boolean,
  clickSave?: (e: any) => void;
}

const Input: React.SFC<IProps> = ({ item, index, showSave ,clickSave }) => {
  function save() {
    return (
      <SaveBtn value={index} onClick={clickSave}>
        Save
      </SaveBtn>
    )
  }
  
  return (
    <DefinitionWrapper key={index}>
      <EntryHeader>
        <SearchWord>{item.meta.stems[0]}</SearchWord>
        {showSave && save()}
        <Fl>{item.fl}</Fl>
        <EntryAttr>
          {item.hwi.prs != null ? `/${item.hwi.prs[0].mw}/` : ''}
        </EntryAttr>
      </EntryHeader>
      <Vg>
        <VgHeader>
          <h2>Definition of {item.meta.id}</h2>
        </VgHeader>
        <VgContent>
          {item.shortdef.map((def, i) => {
            return (
              <div key={i}>
                <span>{i + 1}.</span>
                <div>{def}</div>
              </div>
            );
          })}
        </VgContent>
      </Vg>
      <DivLine />
    </DefinitionWrapper>
  );
};

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

const DefinitionWrapper = styled.div`
  margin-bottom: 20px;
`;

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

const VgContent = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    flex-direction: row;
    color: #303336;
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
    font-size: 18px;
    font-stretch: normal;
    font-weight: normal;
    letter-spacing: 0.2px;
    line-height: 22px;
    margin-bottom: 25px;

    > span {
      font-weight: bold;
    }
  }
`;

const DivLine = styled.div`
  background: #cbe1ea;
  height: 6px;
`;

const SaveBtn = styled.button`
  width: 100px;
  height: 40px;
  background-color: #2d5f7c;
  float: right;
  border: none;
  color: white;
  cursor: pointer;
`;

export default Input;
