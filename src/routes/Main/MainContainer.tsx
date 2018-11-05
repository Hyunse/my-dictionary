import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import MainPresenter from './MainPresenter';

interface IProps extends RouteComponentProps<any> {}

class MainContainer extends Component<IProps> {
  public render() {
    return (
      <MainPresenter />
    );
  }
}

export default MainContainer;
