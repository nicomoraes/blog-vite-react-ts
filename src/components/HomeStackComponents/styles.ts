import { Box } from '@components/layout/Box';
import styled, { keyframes } from 'styled-components';

export const slideAndAppear = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const Container = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;

  @media (max-with: 640px) {
    span {
      font-size: ${({ theme }) => theme.FONT_SIZE.CAPTION};
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const TechDescription = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY};
  color: ${({ theme }) => theme.COLORS.PRIMARY_GREY_300};
  margin-left: 5px;
`;

export const StackBox = styled(Box)`
  margin-top: 10px;

  span {
    margin-right: 10px;
  }

  & div:nth-child(1) {
    animation: ${slideAndAppear} 2s forwards;
  }
  & div:nth-child(2) {
    animation: ${slideAndAppear} 2s forwards;
    animation-delay: 2s;
    margin-inline: 10px;
  }
  & div:nth-child(3) {
    animation: ${slideAndAppear} 2s forwards;
    animation-delay: 4s;
  }
`;
