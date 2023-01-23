import styled from 'styled-components';

export type ComponentThemingProps = {
  themeColor: 'light' | 'dark';
};

export const Container = styled.div<ComponentThemingProps>`
  width: max-content;
  padding: 7px 30px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme, themeColor }) =>
    themeColor === 'dark' ? theme.COLORS.PRIMARY_GREY_400 : theme.COLORS.PRIMARY_GREY_200};

  a:nth-child(2) {
    margin: auto 10px;
  }
`;
