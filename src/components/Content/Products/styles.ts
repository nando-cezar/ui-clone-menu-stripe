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
    li {
      display: flex;
      align-items: center;

      div {
        ${hover}
        margin-left: 19px;

        h3 {
          ${h3}
        }

        p {
          ${p}
          margin-top: 10px;
        }
      }

      & + li {
        margin-top: 32px;
      }

      span {
        display: inline-block;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        &.payments {
          background: #80b9f9;
        }
        &.billing {
          background: #64e5a7;
        }
        &.connect {
          background: #55d3f5;
        }
      }
    }
  }
  .secondary {
    margin-top: 60px;

    li {
      ${hover}
      display: flex;

      & + li {
        margin-top: 28px;
      }

      h3 {
        ${h3}
        margin-left: 16px;
      }

      p {
        ${p}
        margin-left: 14px;
      }
      
      span {
        display: inline-block;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        &.sigma {
          background: #beaef0;
        }
        &.atlas {
          background: #ffd876;
        }
        &.radar {
          background: #fba2e8;
        }
        &.issuing {
          background: #80b9f9;
        }
        &.terminal {
          background: #5355ba;
        }
      }
    }
  }
`;
