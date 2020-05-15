import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 12px 0 8px;
  position: absolute;
  top: 0;
  left: 0;

  div {
    max-width: 1024px;
    width: 90%;
    padding: 12px;
    margin: 0 auto;

    display: flex;
    flex-wrap: wrap;

    section {
      span {
        color: white;
        font-size: 18px;
        margin-top: 8px;
        font-weight: 500;

        padding-bottom: 4px;

        border-bottom: 1px solid;

        & + span {
          margin-left: 30px;
        }
      }

      & + section {
        margin-left: 30px;
      }

      @media (max-width: 872px) and (min-width: 460px) {
        display: none;
      }
    }

    @media (max-width: 872px) and (min-width: 460px) {
      button {
        display: block;
      }
    }
  }
  @media (max-width: 460px) {
    display: none;
  }
`;
