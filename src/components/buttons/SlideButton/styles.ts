import styled, { css } from 'styled-components';

export type StyledButtonProps = {
  arrowDirection: 'right' | 'left';
};

const setArrowToRight = css`
  right: 2%;
`;
const setArrowToLeft = css`
  left: 2%;
`;

export const StyledButton = styled.button<StyledButtonProps>`
  position: absolute;
  border-radius: 50%;
  background-color: #00000040;
  padding: 2px;
  top: 50%;
  ${({ arrowDirection }) => (arrowDirection == 'right' ? setArrowToRight : setArrowToLeft)};
  z-index: 5;
`;
