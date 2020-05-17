import styled from 'styled-components';

import background from '../../assets/images/MerryMe.jpg';

export const Wrapper = styled.div`
  background-color: #ffba53;

  min-height: 100vh;
  display: flex;
`;

export const Container = styled.div`
  max-width: 450px;
  height: 400px;
  margin: 128px auto 0;

  background: url(${background}) center;
  box-shadow: 4px 4px 10px -2px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  overflow: hidden;
`;

export const Form = styled.form`
  padding: 16px;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.4);

  h1 {
    margin: 16px 0;

    color: white;
    text-transform: uppercase;
    text-align: center;

    text-shadow: 2px 1px 6px rgba(0, 0, 0, 1);
  }

  input {
    height: 40px;
    width: 100%;
    margin-top: 12px;

    border: 0;
    padding: 4px 16px;
    border-radius: 4px;

    color: #245e6f;
  }

  button {
    display: block;
    width: 100%;
    height: 40px;
    border-radius: 4px;
    margin: 16px 0 8px;

    background-color: #ffdcab;

    color: #245e6f;
    text-transform: uppercase;
    font-size: 18px;
  }

  a {
    color: white;
  }
`;
