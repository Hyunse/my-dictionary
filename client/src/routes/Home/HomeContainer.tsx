import React, { Component } from 'react';
import HomePresenter from './HomePresenter';

interface IOwnProps {}

interface IStateProps {}

interface IDispatchProps {}

type IProps = IStateProps & IDispatchProps & IOwnProps;

class HomeContainer extends Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    return (
      <HomePresenter />
    );
  }
}


export default HomeContainer;
