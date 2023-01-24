import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

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

  button {
    margin-top: 10px;
  }
`;
