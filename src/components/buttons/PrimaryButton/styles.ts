import styled, { css } from 'styled-components';
import { Button } from '../Button';

export type StyledButtonProps = {
  secondary?: boolean;
};

const renderSecondaryButtonBorder = css`
  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_BLACK_500};
`;

export const StyledButton = styled(Button)<StyledButtonProps>`
  width: 150px;
  border-radius: 5px;
  color: ${({ theme }) => theme.COLORS.PRIMARY_BLACK_500};

  ${({ secondary }) => (secondary ? renderSecondaryButtonBorder : '')}
  background-color: ${({ theme, secondary }) =>
    secondary ? 'transparent' : theme.COLORS.PRIMARY_GREY_300};

  &:hover {
    transition: background-color 0.6s ease-out;
    background-color: ${({ theme, secondary }) =>
      secondary ? theme.COLORS.PRIMARY_GREY_300 : theme.COLORS.PRIMARY_GREY_400};
  }
`;
