import React, { Component } from 'react';
import HomePresenter from './HomePresenter';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { RouteComponentProps } from 'react-router';
import words from '../../Words';

interface IState {
  todayWord: string;
}

interface IOwnProps {}

interface IStateProps {}

interface IDispatchProps {
  searchWords: (value: string, callback: () => void) => void;
}

type IProps = IStateProps & IDispatchProps & IOwnProps & RouteComponentProps;

class HomeContainer extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      todayWord: '',
    };

    this.getRandomeWord();
  }

  public clickSearch = (e) => {
    const value = e.target.getAttribute('data-value');

    this.props.searchWords(value, () => {
      this.props.history.push(`/dictionary/${value}`);
    });
  };

  public getRandomeWord() {
    const word = words[Math.floor(Math.random() * words.length)];

    if (word) {
      this.props.searchWords(word, () => {
        this.setState({
          todayWord: word.toUpperCase(),
        });
      });
    }
  }

  public render() {
    return <HomePresenter clickSearch={this.clickSearch} todayWord={this.state.todayWord} />;
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
