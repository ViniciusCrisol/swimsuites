import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    color: #245e6f;
    text-transform: uppercase;

    margin: 12px 0 12px;
  }

  a {
    line-height: 1.6;
    color: #245e6f;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;

    transition: 200ms;

    &:hover {
      color: #1cbad8;
    }
  }

  @media (max-width: 630px) {
    display: none;
  }

  .active {
    color: #1cbad8;
    font-weight: 600;
  }
`;
