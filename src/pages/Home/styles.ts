import styled from 'styled-components';
import { Box } from '@components/Layout/Box';

export const LandingSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px auto 0 auto;
`;

export const HeadingBox = styled(Box)`
  width: 100%;
  margin: 20px 0 20px 0;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
`;

export const ReceptionText = styled.h1`
  font-size: ${({ theme }) => theme.FONT_SIZE.HEADING};
  color: ${({ theme }) => theme.COLORS.PRIMARY_BLACK_500};
`;

export const SubReceptionText = styled.p`
  font-weight: 500;
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY};
  color: ${({ theme }) => theme.COLORS.PRIMARY_GREY_400};
  margin-top: 5px;
  text-align: center;
`;

export const Separator = styled.hr`
  width: 100%;
  align-self: center;
  margin: 10px 0;
  color: ${({ theme }) => theme.COLORS.PRIMARY_BLACK_500};
`;

export const TopicsBox = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const PostCategoriesBox = styled(Box)`
  display: flex;
  margin: 10px 0;

  & button {
    margin-inline: 10px;
  }

  @media (max-width: 640px) {
    & button {
      width: 100px;
      font-size: 14px;
    }
  }
`;

export const CardSectionText = styled.h2`
  text-align: center;
  font-weight: 500;
  font-size: ${({ theme }) => theme.FONT_SIZE.HEADING_2};
  color: ${({ theme }) => theme.COLORS.PRIMARY_GREY_300};
  margin: 10px 0;
`;

export const CardsSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 20px 0;
  border-radius: 10px;
`;
