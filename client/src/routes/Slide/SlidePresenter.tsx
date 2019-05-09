import React from 'react';
import styled from '../../typed-components';

interface ISlide {
  hide: boolean,
  text: string,
  textHead: string,
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
        return (
          <SlideContainer key={idx}>
            <SlideImg src={slide.src} className={slide.hide ? 'hide' : ''} />
            <TextBox className={slide.hide ? 'hide' : ''}>
              <TextHead>{slide.textHead}</TextHead>
              <TextContent>{slide.text}</TextContent>
            </TextBox>
          </SlideContainer>
        );
      })}
      <Arrow className="prev" onClick={nextSlide} value="-1">&#10094;</Arrow>
      <Arrow className="next" onClick={nextSlide} value="1">&#10095;</Arrow>

      {dots.map((dot: IDot, idx) => {
        return <Dot key={idx} value={idx + 1} className={dot.active ? 'active' : ''} onClick={currentSlide} />
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

const SlideContainer = styled.div`
`

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

const TextBox = styled.div`
  position: absolute;
  width: 100%;
  bottom: -20px;
  background: rgba(255,255,255,.92);
  opacity: 0.5;
  z-index: 1;
`;

const TextHead = styled.p`
  margin-top: 10px;
  font-weight: bold;
  font-size: 20px;
`

const TextContent = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 15px;
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
