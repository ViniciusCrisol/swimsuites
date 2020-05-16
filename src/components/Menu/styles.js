import styled from 'styled-components';

export const Container = styled.div`
  div {
    ul {
      width: 80%;
      margin: 32px auto;

      h1 {
        margin-bottom: 16;
        padding-bottom: 16px;
        border-bottom: 1px solid #3c879c;

        color: #ffba53;
        text-transform: uppercase;
        text-align: center;
      }

      li {
        width: 90%;
        height: 48px;
        margin: 0 auto;

        display: flex;

        a {
          height: 100%;
          width: 100%;

          display: flex;
          align-items: center;

          text-decoration: none;
          font-weight: 500;
          font-size: 16px;
          color: #245e6f;
        }
      }
    }
  }
`;
