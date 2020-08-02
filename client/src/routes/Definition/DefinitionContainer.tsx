import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import server from '../../config/server';
import DefinitionPresenter from './DefinitionPresenter';

interface IOwnProps {}

interface IStateProps {
  searchList: any;
  searchValue: string;
  saveValue: number;
}

interface IDispatchProps {}

type IProps = IStateProps & IDispatchProps & IOwnProps;

class DefinitionContainer extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      saveValue: -1,
    };
  }

  public clickSave = async (e) => {
    const word = JSON.stringify(this.props.searchList[e.target.value]);
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    const response = await axios.post(
      `${server.production.url}/vocabulary/save`,
      {
        word,
      }
    );
    delete axios.defaults.headers.common['Authorization'];

    if (response.data && response.data.ok) {
      alert('Saved');
    }
  };

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
    searchValue: state.searchValue,
  };
};

export default connect(mapStateToProps, null)(DefinitionContainer);
