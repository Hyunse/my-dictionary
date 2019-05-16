import React, { Component } from 'react';
import { connect } from 'react-redux';
import DefinitionPresenter from './DefinitionPresenter';

interface IOwnProps { }

interface IStateProps {
  searchList: any;
  searchValue: string;
  saveValue: number;
}

interface IDispatchProps { }

type IProps = IStateProps & IDispatchProps & IOwnProps;

class DefinitionContainer extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      saveValue: -1
    }
  }

  public clickSave = (e) => {
    // TODO: DELETE
    // tslint:disable-next-line
    console.log(e);
    // tslint:disable-next-line
    console.log(this);
  }

  public render() {
    return (
      <DefinitionPresenter
        clickSave={this.clickSave}
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


export default connect(mapStateToProps, null)(DefinitionContainer);