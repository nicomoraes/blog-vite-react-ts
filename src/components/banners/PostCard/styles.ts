import styled from 'styled-components';
import { Box } from '@components/Layout/Box';
import { PrimaryButton } from '@components/buttons/PrimaryButton';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  margin: 0 auto;
  transition: all 0.8s;
  -webkit-font-smoothing: antialiased;

  img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 8px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_GREY_200};
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  overflow: hidden;
  overflow-wrap: break-word;
  word-break: break-word;
`;

export const TagsBox = styled(Box)`
  width: 100%;
  height: max-content;

  & > span {
    margin-right: 3px;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.COLORS.PRIMARY_GREY_300};
    font-size: ${({ theme }) => theme.FONT_SIZE.CAPTION};
  }
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.FONT_SIZE.HEADING_3};
  color: ${({ theme }) => theme.COLORS.PRIMARY_GREY_500};
`;

export const Summary = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.CAPTION};
  max-width: 152ch;
  word-break: break-word;
  margin-top: 5px;
  margin-bottom: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.PRIMARY_GREY_500};
`;

export const AccessButton = styled(PrimaryButton)``;
