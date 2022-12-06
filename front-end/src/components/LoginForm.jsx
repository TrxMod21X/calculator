import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #23242a;
`;

const Container = styled.div`
  position: relative;
  width: 380px;
  height: 420px;
  background: #1c1c1c;
  border-radius: 8px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 380px;
    height: 420px;
    background: linear-gradient(0deg, transparent, #45f3ff, #45f3ff);
    transform-origin: bottom right;
    animation: animate 6s linear infinite;
  }

  &::after {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 380px;
    height: 420px;
    background: linear-gradient(0deg, transparent, #45f3ff, #45f3ff);
    transform-origin: bottom right;
    animation: animate 6s linear infinite;
    animation-delay: -3s;
  }

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Form = styled.div`
  position: absolute;
  inset: 2px;
  border-radius: 8px;
  background: #28292d;
  z-index: 10;
  padding: 50px 40px;
  display: flex;
  flex-direction: column;

  h2 {
    color: #45f3ff;
    font-weight: 500;
    text-align: center;
    letter-spacing: 0.1em;
  }
`;

const InputBox = styled.div`
  position: relative;
  width: 300px;
  margin-top: 35px;

  input {
    position: relative;
    width: 100%;
    padding: 20px 10px 10px;
    background: transparent;
    border: none;
    outline: none;
    color: #23242a;
    font-size: 1em;
    letter-spacing: 0.05em;
    z-index: 10;

    &:valid ~ span,
    &:focus ~ span {
      color: #45f3ff;
      transform: translateX(0px) translateY(-34px);
      font-size: 0.75em;
    }

    &:valid ~ i,
    &:focus ~ i {
      height: 44px;
    }
  }

  span {
    position: absolute;
    left: 0;
    padding: 20px 0px 10px;
    font-size: 1em;
    color: #8f8f8f;
    pointer-events: none;
    letter-spacing: 0.25em;
    transition: 0.5s;
  }

  i {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #45f3ff;
    border-radius: 4px;
    transition: 0.5s;
    pointer-events: none;
    z-index: 9;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    margin: 10px 0;
    font-size: 0.75em;
    color: #8f8f8f;
    text-decoration: none;

    &:hover,
    &:nth-child(2) {
      color: #45f3ff;
    }
  }
`;

const Button = styled.input`
  border: none;
  outline: none;
  background: #45f3ff;
  padding: 11px 25px;
  width: 100px;
  margin-top: 10px;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;

  &:active {
    opacity: 0.8;
  }
`;

const LoginForm = () => {
  return (
    <Section>
      <Container>
        <Form>
          <h2>Sign In</h2>
          <InputBox>
            <input type="text" required />
            <span>username</span>
            <i></i>
          </InputBox>

          <InputBox>
            <input type="password" required />
            <span>password</span>
            <i></i>
          </InputBox>

          <Links>
            <Link className="linked" to="/">
              <li>Forgot Password</li>
            </Link>

            <Link className="linked" to="/register">
              <li>Signup</li>
            </Link>
          </Links>

          <Button type="submit" value="Login" />
        </Form>
      </Container>
    </Section>
  );
};

export default LoginForm;