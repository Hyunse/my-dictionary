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
    const response = await axios.get(`${server.production.url}/vocabulary`);
    delete axios.defaults.headers.common['Authorization'];

    const { data } = response.data;
    this.setState((current) => ({ ...current, saveWords: data }));
  }

  public clickDelete = async (e) => {
    const value = e.target.value;

    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    const response = await axios.delete(
      `${server.production.url}/vocabulary?wordId=${value}`
    );
    delete axios.defaults.headers.common['Authorization'];

    if (response.data && response.data.ok) {
      const saveWords = this.state.saveWords;
      const filteredSaveWords = saveWords.filter((word) => `${word.id}` !== value);
      
      this.setState({ saveWords: filteredSaveWords });
    }
  };

  public render() {
    return (
      <SavedWordsPresenter
        saveWords={this.state.saveWords}
        clickDelete={this.clickDelete}
      />
    );
  }
}

export default SavedWordsContainer;
