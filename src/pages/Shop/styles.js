import styled from 'styled-components';

import background from '../../assets/images/background.svg';

export const Wrapper = styled.div`
  background: #ffba53 url(${background}) no-repeat center top;
  min-height: 100vh;
`;

export const Container = styled.div`
  max-width: 1024px;
  width: 90%;
  margin: 0 auto;
  padding: 12px;
`;

export const Header = styled.header`
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  input {
    height: 60px;
    max-width: 260px;
    background-color: #ffdcab;
    border: 0;
    padding: 4px 12px;

    text-align: right;
    font-size: 18px;
    color: #3c879c;

    ::placeholder {
      color: #245e6f;
    }
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-weight: 500;
      color: #3c879c;
      font-size: 18px;
      margin-right: 16px;
    }

    button {
      display: none;
    }

    section {
      display: flex;

      svg {
        display: none;

        & + svg {
          display: block;
        }
      }
    }
  }

  @media (max-width: 559px) {
    justify-content: center;

    div {
      width: 100%;
    }

    input {
      margin-bottom: 6px;
      max-width: none;
      width: 100%;
    }
  }
  @media (max-width: 460px) {
    input {
      display: none;
    }

    div {
      justify-content: space-between;

      button {
        display: block;
      }

      svg {
        display: block;
      }

      p {
        display: none;
      }
    }
  }
`;

export const ContainerItens = styled.div`
  margin-top: 64px;

  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;

  > section {
    > img {
      height: 400px;
      width: 300px;
      object-fit: cover;
      object-position: -80px;
    }
  }
`;

export const TextImages = styled.div`
  text-align: center;

  color: #3c879c;
  P {
    font-weight: 500;
    font-size: 20px;
    margin-top: 12px;
  }
`;
