import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import MainPresenter from './MainPresenter';

interface IOwnProps {}

interface IStateProps {}

interface IDispatchProps {}

type IProps = IStateProps & IDispatchProps & IOwnProps & RouteComponentProps;

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
      <MainPresenter url={this.props.match.url}/>
    );
  }
}


export default MainContainer;
