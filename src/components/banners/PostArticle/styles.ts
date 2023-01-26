import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 50px auto;

  img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  @media (max-width: 640px) {
    img {
      height: 200px;
    }
  }
`;

export const PostInformation = styled.div`
  width: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 10px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_GREY_200};
`;

export const Title = styled.h3`
  width: 100%;
  color: ${({ theme }) => theme.COLORS.PRIMARY_GREY_500};
  font-size: ${({ theme }) => theme.FONT_SIZE.HEADING_3};
`;

export const Summary = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.COLORS.PRIMARY_GREY_500};
  font-size: ${({ theme }) => theme.FONT_SIZE.CAPTION};
  font-weight: 400;
  margin-bottom: 15px;
  margin-top: 5px;
`;

export const LinkButtonBox = styled.div`
  width: 150px;
  margin-right: auto;
`;
