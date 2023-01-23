import styled from 'styled-components';
import { Box } from '@components/layout/Box';

export const Content = styled.div`
  width: 100%;
`;

export const HeadingBox = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto 0 auto;

  span {
    margin-right: 15px;
  }

  @media (max-width: 640px) {
    flex-direction: column;

    span {
      margin: 10px 0;
    }
  }
`;

export const Heading = styled.h1`
  text-align: center;
  font-weight: 900;
  font-size: ${({ theme }) => theme.FONT_SIZE.HEADING};
  color: ${({ theme }) => theme.COLORS.PRIMARY_BLACK_500};
`;

export const HeadingSpan = styled.span`
  margin: 0 10px;
  color: ${({ theme }) => theme.COLORS.PRIMARY_BLACK_500};
  font-size: ${({ theme }) => theme.FONT_SIZE.HEADING_2};
`;
