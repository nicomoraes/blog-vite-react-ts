import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(90vh - 70px);

  .animation {
    width: 300px;
    height: 300px;

    @media (max-width: 640px) {
      width: 150px;
      height: 150px;
    }

    @media (max-width: 768px) {
      width: 250px;
      height: 250px;
    }
  }

  @media (max-width: 768px) {
    height: calc(80vh - 70px);
  }
`;

export const Text = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.HEADING};
  font-weight: 700;
  text-align: center;
  color: transparent;
  font-family: 'Lato', sans-serif;
  margin-bottom: -15px;
  -webkit-text-stroke: 2px ${({ theme }) => theme.COLORS.PRIMARY_GREY_300};

  @media (max-width: 640px) {
    font-size: ${({ theme }) => theme.FONT_SIZE.HEADING_2};
  }
`;
