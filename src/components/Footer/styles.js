import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  min-height: 260px;
  margin-top: 128px;
  background: #ffdcab;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  div {
    max-width: 300px;

    margin: 24px;
    color: #245e6f;

    h1 {
      color: #3c879c;
      font-size: 22px;
      margin-bottom: 16px;
    }

    p {
      font-weight: 500;
      font-size: 16px;
    }

    h4 {
      margin-bottom: 4px;
      font-size: 17px;
    }

    a {
      text-decoration: none;
      color: #3c879c;
      font-weight: 550;
    }

    li {
      list-style: none;
    }
  }

  @media (max-width: 600px) {
    div {
      width: 100%;
      border-bottom: 1px solid #3c879c;
      padding: 12px;
    }
  }
`;
