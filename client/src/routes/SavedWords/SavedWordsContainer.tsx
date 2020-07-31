import React, { Component } from 'react';
import axios from 'axios';
import server from '../../config/server';
import SavedWordsPresenter from './SavedWordsPresenter';

interface IOwnProps {}

interface IStateProps {
}

interface IDispatchProps {}

type IProps = IStateProps & IDispatchProps & IOwnProps;

class SavedWordsContainer extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
    this.state = {
    };
  }

  public async getSavedWords() {
    const token = localStorage.getItem('token');
    if(token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${ token }`;
    }

    const response = await axios.get(
      `http://${server.development.url}/vocabulary`,
    );

    delete axios.defaults.headers.common['Authorization'];

    console.log(response.data);
  }

  public render() {
    return (
      <SavedWordsPresenter
      />
    );
  }
}


export default SavedWordsContainer;
