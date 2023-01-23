import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 70px;
  overflow: hidden;

  @media (max-width: 640px) {
    padding: 10px;
    height: max-content;
  }

  @media (max-width: 1024px) {
    padding: 0 10px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1024px;
  height: 100%;
  margin: 0 auto;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const NavigationMenu = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  overflow: hidden;
  margin-right: auto;
  margin-left: auto;

  @media (max-width: 640px) {
    margin: 10px 0;
  }
`;
