import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: 20px auto 5px auto;
`;

export const Title = styled.h1`
  width: 100%;
  color: ${({ theme }) => theme.COLORS.PRIMARY_BLACK_500};
  font-size: ${({ theme }) => theme.FONT_SIZE.HEADING};
  text-align: center;

  @media (max-width: 640px) {
    font-size: ${({ theme }) => theme.FONT_SIZE.HEADING_2};
  }
`;
export const PublicationDate = styled.span`
  width: 100%;
  color: ${({ theme }) => theme.COLORS.PRIMARY_GREY_300};
  font-size: ${({ theme }) => theme.FONT_SIZE.CAPTION};
  text-align: center;
  margin: 10px 0;
`;

export const Summary = styled.p`
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.PRIMARY_GREY_400};
  font-weight: 400;
  font-size: ${({ theme }) => theme.FONT_SIZE.HEADING_3};
  margin: 5px 0 2px 0;
`;

export const Tags = styled.span`
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.PRIMARY_GREY_300};
  font-size: ${({ theme }) => theme.FONT_SIZE.CAPTION};
  margin: 10px 0;
`;
