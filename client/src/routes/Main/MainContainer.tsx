import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import MainPresenter from './MainPresenter';

interface IOwnProps {}

interface IStateProps {
  searchList: any;
}

interface IDispatchProps {
  searchWords: (value: string) => void;
}

type IProps = IStateProps & IDispatchProps & IOwnProps;

/**
 * MainContainer
 */
class MainContainer extends Component<IProps, {}> {
  private inputRef: React.RefObject<HTMLInputElement>;

  /**
   * Create MainContainer
   * @param {IProps} props
   */
  constructor(props: IProps) {
    super(props);
    this.inputRef = React.createRef();
    this.clickSearch = this.clickSearch.bind(this);
  }

  /**
   * Click Search Button
   */
  public clickSearch = () => {
    const inputSearch = this.inputRef.current;

    if (inputSearch) {
      // Create Action searchWords
      this.props.searchWords(inputSearch.value);
    }
  };

  /**
   * Render MainPresenter
   */
  public render() {
    return (
      <MainPresenter
        inputRef={this.inputRef}
        clickSearch={this.clickSearch}
        searchList={this.props.searchList !== '' ? this.props.searchList : []}
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
  return { searchList: state.searchList.data };
};

/**
 * mapDispatchToProps
 * 
 * @param dispatch
 */
const mapDispatchToProps = (dispatch) => {
  return {
    searchWords: (searchValue) => {
      dispatch(actions.searchWords(searchValue));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
