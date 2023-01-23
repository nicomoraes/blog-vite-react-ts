import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(50vh - 70px);
  align-items: center;
  margin: 50px 0;

  .animation {
    width: 100px;
    height: 100px;
  }
`;

export const Label = styled.h3`
  font-size: ${({ theme }) => theme.FONT_SIZE.HEADING_3};
  text-align: center;
`;

export const Message = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY};
  text-align: center;
`;
