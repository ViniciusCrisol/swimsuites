import styled from 'styled-components';
import { darken } from 'polished';

import Img from '../../assets/images/Home.jpg';

export const Container = styled.div`
  min-height: 100vh;

  background: url(${Img});
  background-color: #ffba53;
  background-position: 100% 0;
  background-size: auto 100%;
  background-repeat: no-repeat;

  @media (max-width: 460px) {
    background-size: auto 70%;
    background-position: bottom 0 left 100%;
  }
`;

export const ContentArea = styled.div`
  max-width: 1024px;
  width: 90%;
  margin: 0 auto;
  padding: 12px;

  > div {
    max-width: 580px;
    width: 90%;
    margin: 100px 0 55px;

    h1 {
      font-weight: 400;
      font-size: 52px;
      color: white;
      line-height: 1.4;
    }

    a {
      background-color: #3c879c;
      padding: 24px 32px;
      width: 280px;
      margin-top: 50px;

      color: white;
      text-decoration: none;
      font-size: 18px;
      font-weight: 600;

      display: flex;
      justify-content: center;

      transition: background-color 200ms;

      &:hover {
        background-color: ${darken(0.08, '#3c879c')};
      }

      section {
        display: flex;
      }

      h1 {
        font-size: 32px;
      }
    }
  }
`;

export const Carousel = styled.section`
  margin-top: 50px;
  max-width: 858px;
  width: 90%;
  height: auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: left;

  > div {
    color: white;
    width: 220px;
    margin: 24px 4px 0;

    img {
      width: 220px;
    }

    h1 {
      text-align: center;
      font-size: 16px;
    }

    h3 {
      color: #3c879c;
      text-align: center;
      font-size: 14px;
    }
  }

  @media (max-width: 872px) {
    display: none;
  }
`;
