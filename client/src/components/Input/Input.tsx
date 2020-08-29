import React from 'react';
import styled from '../../typed-components';

interface IProps {
  type: string;
  placeholder?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  handleKeyPress: (e: KeyboardEvent) => void;
}

const Input: React.SFC<IProps> = ({ type, placeholder, inputRef, handleKeyPress }) => (
  <InputBox type={type} placeholder={placeholder} ref={inputRef} onKeyPress={handleKeyPress} />
);

const InputBox = styled.input`
  font-family: 'OpenSans', sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 0.875rem;

  @media (max-width: 750px) {
    font-size: 1.2rem;
  }
`;

export default Input;
