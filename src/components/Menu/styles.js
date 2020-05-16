import styled from 'styled-components';

export const Container = styled.div`
  div {
    ul {
      margin-top: 32px;

      h1 {
        margin-bottom: 32px;

        color: #3c879c;
        text-transform: uppercase;
        text-align: center;
      }

      li {
        width: 90%;
        height: 64px;
        margin: 0 auto;
        border-bottom: 1px solid #245e6f;

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
