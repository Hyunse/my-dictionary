import React from 'react';
import styled from '../../typed-components';
import Button from '../../components/Button';
import Input from '../../components/Input';

interface IProps {
  word: string;
  hiddenWord: string;
  answer: string;
  correct: boolean;
  defs: string[];
  wordInputRef: React.RefObject<HTMLInputElement>;
  handleKeyPress: (e) => void;
  showAnswer: () => void;
  nextWord: () => void;
}

const GamePresenter: React.SFC<IProps> = ({
  word,
  hiddenWord,
  defs,
  answer,
  wordInputRef,
  correct,
  handleKeyPress,
  showAnswer,
  nextWord,
}) => {
  return (
    <Container>
      <Header>Word Game</Header>
      <WordContainer>
        <Input
          type="text"
          placeholder="Guess the word"
          inputRef={wordInputRef}
          handleKeyPress={handleKeyPress}
        />
        {!correct ? <ErrorBox>Your word is incorrect!</ErrorBox> : ''}
      </WordContainer>
      <GuessWord>
        {answer === word ? <span>{word}</span> : <span>{hiddenWord}</span>}
      </GuessWord>
      <VgContent>
        {defs &&
          defs.length > 0 &&
          defs.map((def, i) => {
            return (
              <div key={i}>
                <span>{i + 1}.</span>
                <div>{def}</div>
              </div>
            );
          })}
      </VgContent>
      <ButtonsDiv>
        <Button onClick={showAnswer} name="Show Answer" />
        <Button onClick={nextWord} name="Next Word" />
      </ButtonsDiv>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 110px;
  padding-top: 30px;
  padding-right: 15px;
  padding-left: 15px;
  margin-bottom: 50px;

  @media (max-width: 750px) {
    margin-top: 82px;
  }
`;

const WordContainer = styled.div`
  margin-top: 50px;
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

const GuessWord = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;

  > span {
    font-size: 2.8rem;
    font-weight: 600;
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
    font-size: 1.125rem;
    font-stretch: normal;
    font-weight: normal;
    letter-spacing: 0.2px;
    line-height: 1.375rem;
    margin-bottom: 25px;

    > span {
      font-weight: bold;
      margin-right: 10px;
    }
  }
`;

const ErrorBox = styled.div`
  margin-top: 20px;
  color: #d63031;

  @media (max-width: 750px) {
    margin-top: 0px;
  }
`;

const ButtonsDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 150px;

  button {
    max-width: 150px;
  }

  button[name='Show Answer'] {
    background: #c8d6e5;
  }

  @media (max-width: 750px) {
    margin-top: 15px;
  }
`;

export default GamePresenter;
