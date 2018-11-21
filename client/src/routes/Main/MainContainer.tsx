import React, { Component } from 'react';
import MainPresenter from './MainPresenter';

interface IOwnProps {}

interface IStateProps {}

interface IDispatchProps {}

type IProps = IStateProps & IDispatchProps & IOwnProps;

/**
 * MainContainer
 */
class MainContainer extends Component<IProps, {}> {
  /**
   * Create MainContainer
   * @param {IProps} props
   */
  constructor(props: IProps) {
    super(props);
  }

  /**
   * Render MainPresenter
   */
  public render() {
    return (
      <MainPresenter />
    );
  }
}


export default MainContainer;
