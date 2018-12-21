import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';
import LoginPresenter from './LoginPresenter';

interface IOwnProps {}

interface IStateProps {
  auth: string;
}

interface IDispatchProps {
  signIn: (userId: string, password: string, callback: () => void) => void;
}

type IProps = IStateProps & IDispatchProps & IOwnProps & RouteComponentProps;

/**
 * LoginContainer
 */
class LoginContainer extends Component<IProps, {}> {
  private userIdInputRef: React.RefObject<HTMLInputElement>;
  private passwordInputRef: React.RefObject<HTMLInputElement>;
  /**
   * Create LoginContainer
   * @param {IProps} props
   */
  constructor(props: IProps) {
    super(props);
    this.userIdInputRef = React.createRef();
    this.passwordInputRef = React.createRef();
  }

  public clickLogin = () => {
    const userId = this.userIdInputRef.current;
    const password = this.passwordInputRef.current;

    if (userId && password) {
      this.props.signIn(userId.value, password.value, () =>
        this.props.history.push('/')
      );
    }
  };

  /**
   * Render LoginContainer
   */
  public render() {
    return (
      <LoginPresenter
        clickLogin={this.clickLogin}
        userIdInputRef={this.userIdInputRef}
        passwordInputRef={this.passwordInputRef}
      />
    );
  }
}

/**
 * mapStateToProps
 *
 * @param state : state from store
 * @return searchList.data
 */
const mapStateToProps = (state) => {
  return {
    auth: state.auth.authenticated
  };
};

/**
 * mapDispatchToProps
 *
 * @param dispatch
 */
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (userId, password, callback) => {
      dispatch(actions.signIn(userId, password, callback));
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginContainer)
);
