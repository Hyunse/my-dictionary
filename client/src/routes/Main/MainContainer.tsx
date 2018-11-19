import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainPresenter from './MainPresenter';

interface IOwnProps {}

interface IStateProps {
  searchList: any;
  searchValue: string;
}

interface IDispatchProps {}

type IProps = IStateProps & IDispatchProps & IOwnProps;

/**
 * MainContainer
 */
class MainContainer extends Component<IProps, {}> {
  /**
   * Create MainContainer
   * @param {IProps} props
   */
  constructor(props: IProps) {
    super(props);
  }

  /**
   * Render MainPresenter
   */
  public render() {
    return (
      <MainPresenter
        searchValue= {this.props.searchValue}
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
  return {
    searchList: state.searchList.data,
    searchValue: state.searchValue
  };
};

export default connect(mapStateToProps)(MainContainer);
