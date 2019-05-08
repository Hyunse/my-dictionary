import React from 'react';
import styled from '../../typed-components';

interface ISlide {
  hide: boolean,
  src: string
}

interface IDot {
  active: boolean
}

interface IProps {
  slides: ISlide[];
  dots: IDot[];
}

const SlidePresenter: React.SFC<IProps> = ({slides, dots}) => {
  return (
    <Container>
      {slides.map((slide : ISlide, key) => {
        return <SlideImg key={key} src={slide.src} className= {slide.hide ? 'hide' : ''} />;
      })}
      {dots.map((dot : IDot, key) => {
        return <Dot key={key} className={dot.active ? 'active' : ''} />
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1165px;
  height: 100vh;
  padding-left: 30px;
  padding-right: 30px;
  margin: auto;
`;

const SlideImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`

const Dot = styled.span`
  display: inline-block;
  width: 15px;
  height: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.6s ease;

  .active :hover {
    background-color: #717171;
  }
`;

export default SlidePresenter;
