import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';
import NavPresenter from './NavPresenter';

interface IOwnProps {}

interface IStateProps {
  auth: string;
}

interface IDispatchProps {
  signOut: () => void;
  searchWords: (value: string, callback: () => void) => void;
}

type IProps = IStateProps & IDispatchProps & IOwnProps & RouteComponentProps;

class NavContainer extends Component<IProps> {
  private inputRef: React.RefObject<HTMLInputElement>;
  private logined: boolean;

  constructor(props: IProps) {
    super(props);
    this.logined = this.checkAuth();
    this.inputRef = React.createRef();
    this.clickSearch = this.clickSearch.bind(this);
  }

  public componentDidUpdate = () => {
    this.logined = this.checkAuth();
  };

  /**
   * Check Authenticated
   */
  public checkAuth() {
    if (!this.props.auth) {
      return false;
    }
    return true;
  }

  /**
   * Key Press
   */
  public handleKeyPress = (e: KeyboardEvent) => {
    // Enter
    if (e.charCode === 13) {
      this.clickSearch();
    }
  };

  /**
   * Click Search Button
   */
  public clickSearch = () => {
    const inputSearch = this.inputRef.current;

    if (inputSearch) {
      // Create Action searchWords
      this.props.searchWords(inputSearch.value, () => {
        this.props.history.push(`/dictionary/${inputSearch.value}`);
      });
    }
  };

  /**
   * Click Logout Button
   */
  public clickLogout = () => {
    this.props.signOut();
  };

  public render() {
    return (
      <NavPresenter
        logined={this.logined}
        inputRef={this.inputRef}
        clickSearch={this.clickSearch}
        clickLogout={this.clickLogout}
        handleKeyPress={this.handleKeyPress}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.authenticated
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchWords: (searchValue, callback) => {
      dispatch(actions.searchWords(searchValue, callback));
    },
    signOut: () => {
      dispatch(actions.signOut());
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavContainer)
);
