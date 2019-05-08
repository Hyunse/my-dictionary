import React, { Component } from 'react';
import SlidePresenter from './SlidePresenter';

interface ISlide {
  hide: boolean,
  src: string
}

interface IDot {
  active: boolean
}

interface IOwnProps { }

interface IStateProps { }

interface IDispatchProps { }

type IProps = IStateProps & IDispatchProps & IOwnProps;

/**
 * SlideContainer
 */
class SlideContainer extends Component<IProps, {}> {

  private slideIndex = 1;
  private slideLength = 3;
  private slides: ISlide[] = [];
  private dots: IDot[] = [];

  /**
   * Create SlideContainer
   * @param {IProps} props
   */
  constructor(props: IProps) {
    super(props);
    this.init();

  }

  public init = () => {
    for (let i = 0; i < this.slideLength; i++) {
      const slide : ISlide = {
        hide: true,
        src: `/image/home_${i+1}.jpg`
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

  public nextSlide = (n) => {
    this.showSlide(this.slideIndex += n);
  }

  public currentSlide = (n) => {
    this.showSlide(this.slideIndex = n);
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
  }


  /**
   * Render SlideContainer
   */
  public render() {
    return (
      <SlidePresenter slides={this.slides} dots={this.dots} />
    );
  }
}

export default SlideContainer;
