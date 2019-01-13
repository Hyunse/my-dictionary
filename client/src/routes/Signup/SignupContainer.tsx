import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import SignupPresenter from './SignupPresenter';

interface IOwnProps {}

interface IStateProps {}

interface IDispatchProps {}

type IProps = IStateProps & IDispatchProps & IOwnProps & RouteComponentProps;

class SignupContainer extends Component<IProps, {}> {

  constructor(props: IProps) {
    super(props);
  }

  public render() {
    return (
      <SignupPresenter />
    )
  }
}

export default SignupContainer;