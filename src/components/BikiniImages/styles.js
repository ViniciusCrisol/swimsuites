import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 300px;
  margin: 16px 8px;

  > img {
    height: 400px;
    width: 300px;

    object-fit: cover;
    object-position: 43%;
  }

  button {
    background-color: #ffb957;
    color: white;
    height: 60px;
    width: 100%;
    margin-top: 32px;
    border-radius: 4px;
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
    font-weight: 500;
    font-size: 20px;
    margin-top: 12px;
  }
`;
