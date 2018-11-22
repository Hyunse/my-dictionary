import React, { Component } from 'react';
import { connect } from 'react-redux';
import DefinitionPresenter from './DefinitionPresenter';

interface IOwnProps {}

interface IStateProps {
  searchList: any;
  searchValue: string;
}

interface IDispatchProps {}

type IProps = IStateProps & IDispatchProps & IOwnProps;

class DefinitionContainer extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  
  public render() {
    return (
      <DefinitionPresenter
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
  // tslint:disable-next-line
  console.log(state);
  return {
    searchList: state.searchList.data,
    searchValue: state.searchValue
  };
};


export default connect(mapStateToProps)(DefinitionContainer);