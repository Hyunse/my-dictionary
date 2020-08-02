import React, { Component } from 'react';
import SlidePresenter from './SlidePresenter';

interface ISlide {
  hide: boolean,
  src: string,
  text: string,
  textHead: string
}

interface IDot {
  active: boolean
}

interface IState {
  dots: IDot[],
  slides: ISlide[]
}

interface IOwnProps {}

interface IStateProps { }

interface IDispatchProps { }

type IProps = IStateProps & IDispatchProps & IOwnProps;

/**
 * SlideContainer
 */
class SlideContainer extends Component<IProps, IState> {

  private slideIndex = 1;
  private slideLength = 3;
  private slides: ISlide[] = [];
  private dots: IDot[] = [];
  private images = [
    'https://images.unsplash.com/photo-1451226428352-cf66bf8a0317?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1653&q=80',
    'https://images.unsplash.com/photo-1478812954026-9c750f0e89fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    'https://images.unsplash.com/photo-1457131760772-7017c6180f05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1636&q=80'
  ];
  private textHead = [
    'We Added New Words to the Dictionary',
    'Try the My Dictionary Traveler!',
    'Welcome'
  ];
  private text = [
    'From Merriam-Webster',
    'Which words as old as you?',
    'New Biggner'
  ];

  /**
   * Create SlideContainer
   * @param {IProps} props
   */
  constructor(props: IProps) {
    super(props);
    this.init();
    this.state = {
      dots: this.dots,
      slides: this.slides
    };
  }

  public init = () => {
    for (let i = 0; i < this.slideLength; i++) {
      const slide : ISlide = {
        hide: true,
        src: `${this.images[i]}`,
        text: this.text[i],
        textHead: this.textHead[i]
      };

      const dot : IDot = {
        active: false
      };

      if (i + 1 === this.slideIndex) {
        slide.hide = false;
        dot.active = true;
      }

      this.slides.push(slide);
      this.dots.push(dot);
    }
  }

  public nextSlide = (e) => {
    const value = parseInt(e.target.getAttribute('value'), 10);
    this.slideIndex += value;
    this.showSlide(this.slideIndex);
  }

  public currentSlide = (e) => {
    const value =  parseInt(e.target.getAttribute('value'), 10);
    this.slideIndex = value;
    this.showSlide(this.slideIndex);
  }

  public showSlide = (n) => {

    if (n > this.slideLength) {
      this.slideIndex = 1;
    }

    if (n < 1) {
      this.slideIndex = this.slideLength;
    }

    for (const slide of this.slides) {
      slide.hide = true;
    }

    for (const dot of this.dots) {
      dot.active = false;
    }

    this.slides[this.slideIndex - 1].hide = false;
    this.dots[this.slideIndex - 1].active = true;

    this.setState({
      dots: this.dots,
      slides:  this.slides
    });
  }


  /**
   * Render SlideContainer
   */
  public render() {
    return (
      <SlidePresenter slides={this.state.slides} dots={this.state.dots} currentSlide={this.currentSlide} nextSlide={this.nextSlide} />
    );
  }
}

export default SlideContainer;
