import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1024px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    margin: 0 10px;
  }
`;
