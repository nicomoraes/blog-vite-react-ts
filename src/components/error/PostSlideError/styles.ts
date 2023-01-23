import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 310px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_BLACK_500};

  h3 {
    font-size: ${({ theme }) => theme.FONT_SIZE.HEADING_2};
    text-align: center;

    @media (max-width: 640px) {
      font-size: ${({ theme }) => theme.FONT_SIZE.HEADING_3};
    }
  }

  .animation {
    width: 200px;
    height: 200px;
  }
`;
