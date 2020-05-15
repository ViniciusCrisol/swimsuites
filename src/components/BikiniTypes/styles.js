import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    color: #245e6f;

    margin: 12px 0 12px;

    text-transform: uppercase;
  }

  a {
    line-height: 1.6;
    color: #245e6f;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
  }

  @media (max-width: 872px) {
    display: none;
  }

  .active {
    color: #1cbad8;
    font-weight: 600;
  }
`;
