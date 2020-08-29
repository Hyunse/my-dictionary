import React from 'react';
import styled from '../../typed-components';
// import Slide from '../Slide';
import gameImg from '../../assets/image/game.jpg';
import todayWord from './TodayWord';

interface IProps {
  clickSearch: (e) => void;
}

const HomePresenter: React.SFC<IProps> = ({ clickSearch }) => {
  function getToday() {
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleString('en', { month: 'long' });
    const year = date.getFullYear();

    return <Today>{`${day} ${month} ${year}`}</Today>;
  }

  return (
    <Container>
      {/* <Slide /> */}
      <BoxContainer>
        <Box>
          <BoxHeader>take a 3-minute break</BoxHeader>
          <BoxUnderLine />
          <GameImg src={gameImg} />
        </Box>
        <Box>
          <Border>
            <BoxHeader>word of the day</BoxHeader>
            <BoxUnderLine />
            {getToday()}
            <WordDiv>
              <Word data-value={todayWord.meta.id} onClick={clickSearch}>
                {todayWord.meta.id}
              </Word>
            </WordDiv>
          </Border>
        </Box>
      </BoxContainer>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 150px;
  padding-right: 15px;
  padding-left: 15px;

  @media (max-width: 750px) {
    margin-top: 0;
  }
`;

const BoxContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
    margin-top: 87px;
    gap: 50px;
  }
`;

const Box = styled.div`
  max-width: 400px;

  @media (max-width: 750px) {
    width:100%;
  }
`;

const BoxHeader = styled.h4`
  color: #375c71;
  font-family: Lato, Helvetica, Arial, sans-serif;
  font-size: 0.813em;
  font-weight: 700;
  letter-spacing: 0.177em;
  line-height: 1.692em;
  text-align: center;
  text-transform: uppercase;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const BoxUnderLine = styled.div`
  border-bottom: 2px solid #97b7c9;
  display: block;
  height: 1px;
  margin-right: auto;
  margin-left: auto;
  max-width: 80px;
`;

const GameImg = styled.img`
  max-width: 100%;
  margin-top: 15px;
  cursor: pointer;
`;

const Today = styled.div`
  color: #375c71;
  font-family: Lato, Helvetica, Arial, sans-serif;
  letter-spacing: 0.177em;
  text-align: center;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
  margin-top: 30px;
`;

const WordDiv = styled.div`
  text-align: center;
`;

const Word = styled.h4`
  margin: 1em 0;
  display: inline-block;
  color: #3b3e41;
  font-size: 50px;
  font-weight: 800;
  letter-spacing: 0.07201em;
  margin-top: 50px;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

const Border = styled.div`
  width: 400px;
  height: 100%;
  border: 2px solid #bcd4e2;
  border-radius: 2px;

  @media (max-width: 750px) {
    width: 100%;
  }
`;

export default HomePresenter;
