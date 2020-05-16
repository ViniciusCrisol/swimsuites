import styled from 'styled-components';

import background from '../../assets/images/background.svg';

export const Wrapper = styled.div`
  background: white url(${background}) no-repeat center top;
  min-height: 100vh;
`;

export const Container = styled.div`
  max-width: 1024px;
  width: 90%;
  margin: 0 auto;
  padding: 0 12px;
`;

export const Header = styled.header`
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  input {
    height: 60px;
    width: 300px;
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

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-weight: 500;
      color: #3c879c;
      font-size: 18px;
      margin-right: 16px;
    }

    section {
      display: flex;

      svg {
        display: none;

        & + svg {
          margin-left: 24px;
          display: block;
        }
      }
    }
  }

  @media (max-width: 630px) {
    justify-content: center;

    input {
      display: none;
    }

    div {
      width: 100%;
      justify-content: space-between;

      section {
        svg {
          display: block;
        }
      }

      button {
        display: block;
      }

      p {
        display: none;
      }
    }
  }
`;

export const ContainerItens = styled.div`
  margin: 64px 0 64px;

  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  display: flex;

  @media (max-width: 630px) {
    justify-content: center;
    margin-bottom: 0;
  }
`;

export const BikiniProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
