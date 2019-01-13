import React from 'react';
import book from '../../assets/image/book.jpg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import styled from '../../typed-components';

interface IProps {
  // clickLogin: () => void;
  // userIdInputRef: React.RefObject<HTMLInputElement>;
  // passwordInputRef: React.RefObject<HTMLInputElement>;
  // handleKeyPress: (e: KeyboardEvent) => void;
}

const SignupPresenter: React.SFC<IProps> = () => {
  // TODO: Temp
  const handleKeyPress = () => {
    alert('1');
  };
  const clickSignup = () => {
    alert('sign up');
  }

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
              />
              <Input
                type="text"
                placeholder="Email"
                handleKeyPress={handleKeyPress}
              />
              <Input
                type="text"
                placeholder="Password"
                handleKeyPress={handleKeyPress}
              />
              <Input
                type="text"
                placeholder="Confirm Password"
                handleKeyPress={handleKeyPress}
              />
              <Input
                type="text"
                placeholder="Country"
                handleKeyPress={handleKeyPress}
              />
              <Input
                type="text"
                placeholder="Name"
                handleKeyPress={handleKeyPress}
              />
              <Button onClick={clickSignup} name="SIGN UP" />
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
`;

const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 37px;
`;

const Form = styled.div``;

export default SignupPresenter;
