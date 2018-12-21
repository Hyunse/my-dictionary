import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import styled from '../../typed-components';

interface IProps {
  clickLogin: () => void;
  userIdInputRef: React.RefObject<HTMLInputElement>;
  passwordInputRef: React.RefObject<HTMLInputElement>;
  errorMessage: string;
  handleKeyPress: (e: KeyboardEvent) => void;
}

const LoginPresenter: React.SFC<IProps> = ({
  clickLogin,
  userIdInputRef,
  passwordInputRef,
  errorMessage,
  handleKeyPress
}) => {
  return (
    <Container>
      <Form>
        <Input
          type="text"
          placeholder="username"
          inputRef={userIdInputRef}
          handleKeyPress={handleKeyPress}
        />
        <Input
          type="password"
          placeholder="password"
          inputRef={passwordInputRef}
          handleKeyPress={handleKeyPress}
        />
        <Button onClick={clickLogin} name="LOGIN" />
        {errorBox(errorMessage)}
        <Message>
          Not registered? <SignUp href="#">Create an account</SignUp>
        </Message>
      </Form>
    </Container>
  );
};

const errorBox = (errorMessage: string) => {
  if (errorMessage) {
    return <ErrorBox>{errorMessage}</ErrorBox>;
  }

  return '';
};

const Container = styled.div`
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
`;

const Form = styled.div`
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
`;

const Message = styled.p`
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
`;

const SignUp = styled.a`
  color: #2d5f7c;
  text-decoration: none;
`;

const ErrorBox = styled.div`
  margin-top: 20px;
  color: #d63031;
`;

export default LoginPresenter;
