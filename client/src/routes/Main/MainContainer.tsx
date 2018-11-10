import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import MainPresenter from './MainPresenter';

interface IProps {
  searchWords: any;
}

class MainContainer extends Component<IProps, {}> {
  private inputRef: React.RefObject<HTMLInputElement>;

  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.clickSearch = this.clickSearch.bind(this);
  }
  public clickSearch = () => {
    const inputSearch = this.inputRef.current;

    if (inputSearch) {
      this.props.searchWords(inputSearch.value);
    }
  };

  public render() {
    return (
      <MainPresenter inputRef={this.inputRef} clickSearch={this.clickSearch} />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchWords: (props) => {
      dispatch(actions.searchWords(props));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(MainContainer);
