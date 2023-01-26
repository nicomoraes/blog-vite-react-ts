import styled from 'styled-components';
import { Button } from '../Button';

export const StyledButton = styled(Button)`
  position: relative;
  margin: 0 10px;
  color: ${({ theme }) => theme.COLORS.PRIMARY_BLACK_500};
  font-size: ${({ theme }) => theme.FONT_SIZE.CAPTION};

  @media (min-width: 768px) {
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_BLACK_500};

    &:before {
      content: '';
      position: absolute;
      background: ${({ theme }) => theme.COLORS.PRIMARY_BLACK_500};
      bottom: 0;
      left: 0;
      right: 0;
      top: 100%;
      z-index: -1;
      transition: top 0.3s ease;
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
    }

    &:hover {
      color: ${({ theme }) => theme.COLORS.PRIMARY_WHITE_100};
    }

    &:hover:before {
      top: 0;
    }
  }

  @media only screen and (max-width: 768px) {
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_BLACK_500};
    border-radius: 5px;
    color: ${({ theme }) => theme.COLORS.PRIMARY_WHITE_100};

    &:active {
      background-color: ${({ theme }) => theme.COLORS.PRIMARY_BLACK_500}90;
    }
  }
`;
