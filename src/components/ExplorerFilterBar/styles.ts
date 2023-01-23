import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-inline: auto;
`;

export const FiltersGrid = styled.div<{ numberOfElements: number }>`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 15px 15px;

  @media (max-width: 640px) {
    gap: 20px 20px;
    button {
      font-size: ${({ theme }) => theme.FONT_SIZE.CAPTION};
      font-weight: 500;
    }
  }
`;
