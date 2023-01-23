import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: max-content;
`;

export const Banner = styled.div`
  display: flex;
  width: 100%;
  height: 310px;
  position: relative;

  img {
    border-radius: 10px;
  }
`;

export const Cover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const Caption = styled.div`
  width: 100%;
  height: 35%;
  padding: 10px 20px;
  position: absolute;
  bottom: 0;
  z-index: 10;
  background-color: #00000080;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  @media (max-width: 640px) {
    height: 50%;
  }
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: ${({ theme }) => theme.FONT_SIZE.HEADING_2};
  color: ${({ theme }) => theme.COLORS.PRIMARY_WHITE_100};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.FONT_SIZE.HEADING_3};
  }
`;

export const Summary = styled.div`
  color: ${({ theme }) => theme.COLORS.PRIMARY_WHITE_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.CAPTION};
  font-weight: 400;
  margin: 5px 0 8px 0;
`;
