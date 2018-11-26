import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';
import NavPresenter from './NavPresenter';

interface IOwnProps {
}

interface IStateProps {}

interface IDispatchProps {
  searchWords: (value: string) => void;
}

type IProps = IStateProps & IDispatchProps & IOwnProps & RouteComponentProps;

class NavContainer extends Component<IProps> {
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
   * Key Press
   */
  public handleKeyPress = (e) => {
    // Enter
    if(e.charCode === 13) {
      this.clickSearch();
    }
  }

  /**
   * Click Search Button
   */
  public clickSearch = () => {
    const inputSearch = this.inputRef.current;

    if (inputSearch) {
      // Create Action searchWords
      this.props.searchWords(inputSearch.value);
      if(this.props.history) {
        this.props.history.push(`/dictionary/${inputSearch.value}`);
      }
    }
  };

  public render() {
    return (
      <NavPresenter inputRef={this.inputRef} clickSearch={this.clickSearch} handleKeyPress={this.handleKeyPress}/>
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
    searchWords: (searchValue) => {
      dispatch(actions.searchWords(searchValue));
    }
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(NavContainer)
);
