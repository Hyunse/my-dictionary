import React, { Component } from 'react';
import axios from 'axios';
import server from '../../config/server';
import SavedWordsPresenter from './SavedWordsPresenter';

interface IOwnProps {}

interface IStateProps {
  saveWords: any;
}

interface IDispatchProps {}

type IProps = IStateProps & IDispatchProps & IOwnProps;

class SavedWordsContainer extends Component<IProps, IStateProps> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      saveWords: [],
    };

    this.getSavedWords();
  }

  public async getSavedWords() {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    const response = await axios.get(
      `http://${server.development.url}/vocabulary`
    );

    delete axios.defaults.headers.common['Authorization'];

    const { data } = response.data;

    this.setState((current) => ({ ...current, saveWords: data }));
  }

  public render() {
    return <SavedWordsPresenter saveWords={this.state.saveWords} />;
  }
}

export default SavedWordsContainer;
