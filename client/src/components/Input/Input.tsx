import React from 'react';
import styled from '../../typed-components';

const InputBox = styled.input`
  font-family: 'OpenSans', sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
`;

interface IProps {
  type: string;
  placeholder?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
}

const Input: React.SFC<IProps> = ({ type, placeholder, inputRef }) => (
  <InputBox type={type} placeholder={placeholder} ref={inputRef} />
);

export default Input;
