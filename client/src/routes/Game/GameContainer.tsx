import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import GamePresenter from './GamePresenter';
import words from '../../Words';

interface IOwnProps {}

interface IStateProps {
  searchList: any;
  searchValue: string;
}

interface IDispatchProps {
  searchWords: (value: string, callback: () => void) => void;
}

interface IState {
  word: string;
  hiddenWord: string;
  answer: string;
  defs: string[];
  correct: boolean;
}

type IProps = IStateProps & IDispatchProps & IOwnProps & RouteComponentProps;

/**
 * GameContainer
 */
class GameContainer extends Component<IProps, IState> {
  private wordInputRef: React.RefObject<HTMLInputElement>;

  constructor(props: IProps) {
    super(props);
    this.state = {
      word: '',
      defs: [],
      hiddenWord: '',
      answer: '',
      correct: true,
    };

    this.getRandomeWord();
    this.wordInputRef = React.createRef();
  }

  public getRandomeWord() {
    const word = words[Math.floor(Math.random() * words.length)];

    if (word) {
      this.props.searchWords(word, () => {
        this.setState({
          word: word.toUpperCase(),
          hiddenWord: this.hideWord(word).toUpperCase(),
          defs: this.props.searchList[0].shortdef,
        });
      });
    }
  }

  public hideWord(word) {
    let wordArr = word.split('');
    const numberOfClue = Math.floor(word.length / 3);
    const clueArray: number[] = [];

    for (let i = 0; i < numberOfClue; i++) {
      clueArray.push(Math.floor(Math.random() * wordArr.length));
    }

    wordArr = wordArr.map((ch, index) => {
      if (clueArray.indexOf(index) > -1) {
        return ch;
      } else {
        return '*';
      }
    });

    return wordArr.join('');
  }

  public nextWord = () => {
    const input = this.wordInputRef;
    
    if(input && input.current) {
      input.current.value = '';
    }
    
    this.getRandomeWord();
    this.setState({ correct: true });
  }

  public showAnswer = () => {
    this.setState({ answer: this.state.word });
  }

  public handleKeyPress = (e: KeyboardEvent) => {
    const input = this.wordInputRef;

    // Enter
    if (input && input.current && e.charCode === 13) {
      const correct = input.current.value.toUpperCase() === this.state.word;

      this.setState({ answer: input.current.value.toUpperCase(), correct });
    }
  };

  public render() {
    return (
      <GamePresenter
        word={this.state.word}
        hiddenWord={this.state.hiddenWord}
        answer={this.state.answer}
        defs={this.state.defs}
        wordInputRef={this.wordInputRef}
        correct={this.state.correct}
        handleKeyPress={this.handleKeyPress}
        nextWord={this.nextWord}
        showAnswer={this.showAnswer}

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

const mapDispatchToProps = (dispatch) => {
  return {
    searchWords: (searchValue, callback) => {
      dispatch(actions.searchWords(searchValue, callback));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
