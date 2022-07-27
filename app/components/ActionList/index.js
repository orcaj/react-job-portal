import styled from 'styled-components';
import { primaryDarkNew, primaryNew, lightGray, darkGray } from 'themes/variables';
import media from 'themes/media';

const ActionList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    padding: 30px 0;
    border-bottom: 2px solid rgb(${lightGray});

    &:first-child {
      padding-top: 0;
    }

    &.bg-list {
      padding: 40px 0;
      &:first-child {
        padding-top: 0;
      }
    }

    a,
    button {
      text-align: left;
      font-family: 'GT-Walsheim-Pro-Regular';
      font-weight: normal;
      color: rgb(${primaryDarkNew});
      letter-spacing: 0.3px;
      font-size: 16px;
      line-height: 28px;
      background: none;
      min-width: 100%;
      padding: 0;
      text-decoration: none;

      &.bg-text {
        letter-spacing: 0;
        font-size: 16px;
        line-height: 32px;

        ${media.extraLarge`
          font-size: 20px;
          line-height: 36px;
        `};
      }

      &.light {
        color: rgba(${primaryDarkNew}, 0.7);
      }

      &:hover {
        transition: all 0.2s;
        text-decoration: none;
        color: rgba(${primaryDarkNew}, 0.5);
        background: none;
        .arrow {
          g {
            transition: all 0.2s;
            fill: rgb(${primaryNew});
          }
        }
      }
    }

    .item-status {
      @media (max-width: 1669px) {
        font-size: 12px;
        padding: 6px 13px;
      }
    }
    .item-name {
      margin-right: 10px;
      ${media.extraLarge`
        margin-right: 15px;
      `};
    }

    .arrow {
      margin-left: 10px;
      &.bg-arrow {
        max-width: 8px;
        max-height: 13px;
        width: 100%;
        height: 100%;

        ${media.extraLarge`
          max-width: 11px;
          max-height: 16px;
          width: 100%;
          height: 100%;
        `};
      }
      &.sm-arrow {
        max-width: 6px;
        max-height: 10px;
        width: 100%;
        height: 100%;
      }
      g {
        fill: rgba(${darkGray}, 0.5);
      }
    }
  }
`;

export default ActionList;
