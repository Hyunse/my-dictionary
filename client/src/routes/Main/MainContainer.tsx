import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainPresenter from './MainPresenter';

interface IOwnProps {}

interface IStateProps {
  searchList: any;
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

export default connect(mapStateToProps)(MainContainer);
