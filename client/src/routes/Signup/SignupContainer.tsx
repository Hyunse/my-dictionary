import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';
import SignupPresenter from './SignupPresenter';

interface IOwnProps {}

interface IStateProps {}

interface IDispatchProps {
  signUp: (
    name: string,
    password: string,
    email: string,
    country: string,
    callback: () => void
  ) => void;
}

type IProps = IStateProps & IDispatchProps & IOwnProps & RouteComponentProps;

class SignupContainer extends Component<IProps, {}> {
  private userIdInputRef: React.RefObject<HTMLInputElement>;
  private emailInputRef: React.RefObject<HTMLInputElement>;
  private passwordInputRef: React.RefObject<HTMLInputElement>;
  private passwordConfirmInputRef: React.RefObject<HTMLInputElement>;
  private countryInputRef: React.RefObject<HTMLInputElement>;

  constructor(props: IProps) {
    super(props);
    this.userIdInputRef = React.createRef();
    this.emailInputRef = React.createRef();
    this.passwordInputRef = React.createRef();
    this.passwordConfirmInputRef = React.createRef();
    this.countryInputRef = React.createRef();
  }
  /**
   * Validate values before signup
   */
  public validateInput = (name, password, passwordConfirm, email, country) => {
    const emailRegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (!name) {
      alert('Please Enter Name.');
    }

    if (!password) {
      // TODO: Check Password Length
      alert('Please Enter Password.');
    }

    if (password !== passwordConfirm) {
      alert(`Password isn't same`);
    }

    if (!email) {
      // TODO: Check Email Form
      alert(`Please Enter Email`);
    }

    if (!email.match(emailRegExp)) {
      alert('Please Enter Right Email');
    }

    if (!country) {
      alert('Please Enter Country');
    }

    return true;
  };

  public handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      this.clickSignup();
    }
  };
  public clickSignup = () => {
    const userId = this.userIdInputRef.current;
    const password = this.passwordInputRef.current;
    const passwordConfirm = this.passwordConfirmInputRef.current;
    const email = this.emailInputRef.current;
    const country = this.countryInputRef.current;
    
    if (this.validateInput(name, password, passwordConfirm, email, country)) {
      if (userId && password && email && country) {
        this.props.signUp(
          userId.value,
          password.value,
          email.value,
          country.value,
          () => this.props.history.push('/')
        );
      }
    }
  };

  /**
   * Click Cancel Button
   */
  public clickCancel = () => {
    this.props.history.push('/login');
  };

  public render() {
    return (
      <SignupPresenter
        handleKeyPress={this.handleKeyPress}
        clickSignup={this.clickSignup}
        clickCancel={this.clickCancel}
        userIdInputRef={this.userIdInputRef}
        emailInputRef={this.emailInputRef}
        passwordInputRef={this.passwordInputRef}
        passwordConfirmInputRef={this.passwordConfirmInputRef}
        countryInputRef={this.countryInputRef}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.authenticated,
    error: state.auth.errorMessage
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (name, password, email, country, callback) => {
      dispatch(actions.signUp(name, password, email, country, callback));
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignupContainer)
);
