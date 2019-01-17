import React from 'react';
import book from '../../assets/image/book.jpg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import styled from '../../typed-components';

interface IProps {
  clickSignup: () => void;
  clickCancel: () => void;
  handleKeyPress: (e: KeyboardEvent) => void;
  userIdInputRef: React.RefObject<HTMLInputElement>;
  emailInputRef: React.RefObject<HTMLInputElement>;
  passwordInputRef: React.RefObject<HTMLInputElement>;
  passwordConfirmInputRef: React.RefObject<HTMLInputElement>;
  countryInputRef: React.RefObject<HTMLInputElement>;
}

const SignupPresenter: React.SFC<IProps> = ({
  handleKeyPress,
  clickSignup,
  clickCancel,
  userIdInputRef,
  emailInputRef,
  passwordInputRef,
  passwordConfirmInputRef,
  countryInputRef
}) => {
  return (
    <Container>
      <Wrapper>
        <Card>
          <Header />
          <Body>
            <Title>Sign up</Title>
            <Form>
              <Input
                type="text"
                placeholder="Name"
                handleKeyPress={handleKeyPress}
                inputRef={userIdInputRef}
              />
              <Input
                type="text"
                placeholder="Email"
                handleKeyPress={handleKeyPress}
                inputRef={emailInputRef}
              />
              <Input
                type="password"
                placeholder="Password"
                handleKeyPress={handleKeyPress}
                inputRef={passwordInputRef}
              />
              <Input
                type="password"
                placeholder="Confirm Password"
                handleKeyPress={handleKeyPress}
                inputRef={passwordConfirmInputRef}
              />
              <Input
                type="text"
                placeholder="Country"
                handleKeyPress={handleKeyPress}
                inputRef={countryInputRef}
              />
              <Button onClick={clickSignup} name="SIGN UP" />
              <Button onClick={clickCancel} name="Cancel" />
            </Form>
          </Body>
        </Card>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const Wrapper = styled.div`
  max-width: 680px;
  margin: 0 auto;
`;

const Card = styled.div`
  position: relative;
  z-index: 1;
  background: #ffffff;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
`;

const Header = styled.div`
  background: url(${book}) center center/cover no-repeat;
  padding-top: 210px;
`;

const Body = styled.div`
  padding: 0 90px;
  padding-top: 55px;
  padding-bottom: 65px;

  button[name='Cancel'] {
    margin-top: 10px;
    background: #c8d6e5;
  }
`;

const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 37px;
`;

const Form = styled.div``;

export default SignupPresenter;
