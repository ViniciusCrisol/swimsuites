import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 300px;
  margin: 16px 8px;

  > img {
    height: 400px;
    width: 300px;

    object-fit: cover;
    object-position: 50%;
  }

  button {
    height: 60px;
    width: 100%;
    margin-top: 32px;
    border-radius: 4px;

    background-color: #ffb957;
    color: white;
    transition: 200ms;

    &:hover {
      background-color: ${darken(0.08, '#ffb957')};
    }
  }
  @media (max-width: 630px) {
    margin-bottom: 64px;

    button {
      display: block;
    }
  }
`;

export const TextImages = styled.div`
  text-align: center;
  color: #3c879c;

  p {
    margin-top: 12px;

    font-weight: 500;
    font-size: 20px;
  }
`;
