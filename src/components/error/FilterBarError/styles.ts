import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;

  span {
    font-size: ${({ theme }) => theme.FONT_SIZE.CAPTION};
    color: ${({ theme }) => theme.COLORS.PRIMARY_GREY_400};
    text-align: center;
  }

  .animation {
    width: 50px;
    height: 50px;
  }
`;
