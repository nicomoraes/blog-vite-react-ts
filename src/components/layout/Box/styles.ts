import styled from 'styled-components';

export type StyledDivProps = { vertical?: boolean };

export const StyledDiv = styled.div<StyledDivProps>`
  display: flex;
  flex-direction: ${({ vertical }) => (vertical ? 'column' : 'row')};
  align-items: center;
`;
