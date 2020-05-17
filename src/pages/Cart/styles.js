import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  min-height: 100vh;

  background-color: #ffba53;

  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  padding: 30px;
  border-radius: 4px;
  max-width: 1024px;
  width: 90%;
  margin: 0 auto;

  background-color: white;

  footer {
    margin-top: 30px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      display: block;
      border-radius: 4px;
      padding: 12px 20px;
      border: 0;

      background-color: #3c879c;

      color: white;
      font-weight: bold;
      text-transform: uppercase;
      transition: 200ms;

      &:hover {
        background-color: ${darken(0.03, '#3c879c')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    padding: 12px;
    color: #999;
    text-align: left;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    display: block;
    background: none;
    border: 0;
    padding: 6px;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
