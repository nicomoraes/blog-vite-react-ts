import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px auto;

  h1,
  h2,
  h3 {
    color: ${({ theme }) => theme.COLORS.PRIMARY_BLACK_500};
    font-weight: 900;
  }

  h1 {
    font-size: ${({ theme }) => theme.FONT_SIZE.HEADING_3};
  }

  h2 {
    font-size: ${({ theme }) => theme.FONT_SIZE.HEADING_2};
    margin-top: 20px;
  }

  h3 {
    font-size: ${({ theme }) => theme.FONT_SIZE.HEADING_3};
    margin-top: 20px;
  }

  p {
    font-size: ${({ theme }) => theme.FONT_SIZE.BODY};
    color: ${({ theme }) => theme.COLORS.PRIMARY_BLACK_500};
    margin: 15px 0;
    line-height: 30px;

    code {
      font-weight: 700;
      background-color: ${({ theme }) => theme.COLORS.PRIMARY_GREY_200};
      padding: 5px 10px;
      border-radius: 10px;
    }
  }

  ul {
    margin: 10px 0;
    li {
      margin: 15px 0 15px 30px;
      font-size: ${({ theme }) => theme.FONT_SIZE.CAPTION};
      color: ${({ theme }) => theme.COLORS.PRIMARY_GREY_500};
      font-weight: 500;
    }
  }

  pre div {
    border-radius: 10px;
  }
`;
