import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import LoginPresenter from './LoginPresenter';

interface IOwnProps {}

interface IStateProps {}

interface IDispatchProps {
  signIn: (userId: string, password: string) => void;
}

type IProps = IStateProps & IDispatchProps & IOwnProps;

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
      this.props.signIn(userId.value, password.value);
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
 * mapDispatchToProps
 *
 * @param dispatch
 */
const mapDispatchToProps = (dispatch) => {
  return {
    sginIn: (userId, password) => {
      dispatch(actions.sginIn(userId, password));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LoginContainer);
