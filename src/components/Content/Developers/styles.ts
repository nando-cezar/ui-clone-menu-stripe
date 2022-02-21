import styled, { css } from 'styled-components';

const h3 = css`
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  color: #32325d;
`;

const p = css`
  color: #6b7c93;
`; 

const hover = css`
  cursor: pointer;
  transition: opacity 0.1s ease-in;
  &:hover {
    opacity: 0.7;
  }
`;

export const Container = styled.div`
  padding: 32px 35px;
  white-space: nowrap;

  .primary {
    display: flex;
    > span {
      display: inline-block;
      width: 17px;
      height: 17px;
      margin-right: 12px;
      background: #505e7d;
      border-radius: 3.5px;
    }

    > div {

      > h3 {
        ${h3}
        ${hover}
      }

      > p {
        ${p}
        margin-top: 16.7px;
      }

      > div {
        margin-top: 35px;
        display: flex;
        align-items: center;

        > ul + ul {
          margin-left: 41px;
        }

        > ul li {
          ${hover}
          color: #424770;
          h4 {
            color: #8898aa;
            text-transform: uppercase;
          }

          & + li {
            margin-top: 13px;
          }
        }
      }
    }
  }
  .secondary {
    margin-top: 69px;

    li {
      ${hover}
      ${h3}
      
      display: flex;
      align-items: center;

      & + li {
        margin-top: 21px;
      }
    }

    span {
      display: inline-block;
      width: 17px;
      height: 17px;
      margin-right: 12px;
      border-radius: 3.5px;
      background: #505e7d;

      &.api-reference {
        border-radius: 0;
        background: repeating-linear-gradient(
          rgba(0, 0, 0, 0),
          #000 0.001px,
          #000 2.125px,
          #fff 2.126px,
          #fff 4.25px
        );
      }
    }
  }
`;
