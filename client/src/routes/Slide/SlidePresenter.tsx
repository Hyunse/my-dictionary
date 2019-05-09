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
  nextSlide: (e) => void;
  currentSlide: (e) => void;

}

const SlidePresenter: React.SFC<IProps> = ({ slides, dots, nextSlide, currentSlide }) => {
  return (
    <Container>
      {slides.map((slide: ISlide, idx) => {
        return <SlideImg key={idx} src={slide.src} className={slide.hide ? 'hide' : ''} />;
      })}
      <Arrow className="prev" onClick={nextSlide} value="-1">&#10094;</Arrow>
      <Arrow className="next" onClick={nextSlide} value="1">&#10095;</Arrow>
      {dots.map((dot: IDot, idx) => {
        return <Dot key={idx} value={idx+1} className={dot.active ? 'active' : ''} onClick={currentSlide} />
      })}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  max-width: 700px;
  height: 400px;
  margin: auto;
  text-align: center;

  .hide {
    display: none;
  }

  span.active {
    background-color: #717171;
  }

  span:hover {
    background-color: #717171;
  }
  .prev {
    left: 0;
    border-radius: 3px 0 0 3px;
  }
  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }
  
  .prev:hover, .next:hover {
    background-color: rgba(0,0,0,0.8);
  }
`;

const SlideImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;

`

const Arrow = styled.a`
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;

`

const Dot = styled.span`
  display: inline-block;
  width: 15px;
  height: 15px;
  margin: 10px 8px;
  background-color: #bbb;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.6s ease;

`;

export default SlidePresenter;
