import axios from 'axios';
import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import MainPresenter from './MainPresenter';

interface IProps extends RouteComponentProps<any> {}

class MainContainer extends Component<IProps> {
  private inputRef: React.RefObject<HTMLInputElement>;

  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  public clickSearch = () => {
    const inputSearch = this.inputRef.current;
    if (inputSearch) {
      axios
        .get(
          `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${inputSearch}?key=${process.env.REACT_APP_DICTIONARY_KEY}`
        )
        .then((res) => {
          // tslint:disable-next-line
          console.log(res);
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  public render() {
    return (
      <MainPresenter inputRef={this.inputRef} clickSearch={this.clickSearch} />
    );
  }
}

export default MainContainer;
