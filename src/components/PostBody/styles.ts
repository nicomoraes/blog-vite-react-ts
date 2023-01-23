import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: 20px auto;

  h1 {
    font-size: ${({ theme }) => theme.FONT_SIZE.HEADING_3};
    color: ${({ theme }) => theme.COLORS.PRIMARY_GREY_500};
  }

  h2 {
    font-size: ${({ theme }) => theme.FONT_SIZE.HEADING_2};
    color: ${({ theme }) => theme.COLORS.PRIMARY_GREY_400};
  }

  p {
    font-size: ${({ theme }) => theme.FONT_SIZE.BODY};
    color: ${({ theme }) => theme.COLORS.PRIMARY_BLACK_500};
    margin: 15px 0;
    line-height: 30px;
  }
`;
