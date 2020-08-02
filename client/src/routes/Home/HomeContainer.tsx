import React, { Component } from 'react';
import HomePresenter from './HomePresenter';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { RouteComponentProps } from 'react-router';

interface IOwnProps {}

interface IStateProps {}

interface IDispatchProps {
  searchWords: (value: string, callback: () => void) => void;
}

type IProps = IStateProps & IDispatchProps & IOwnProps & RouteComponentProps;

class HomeContainer extends Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  public clickSearch = (e) => {
    const value = e.target.getAttribute('data-value');
    
    this.props.searchWords(value, () => {
      this.props.history.push(`/dictionary/${value}`);
    });
  };

  public render() {
    return <HomePresenter clickSearch={this.clickSearch} />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchWords: (searchValue, callback) => {
      dispatch(actions.searchWords(searchValue, callback));
    },
  };
};

export default withRouter(connect(null, mapDispatchToProps)(HomeContainer));
