import styled from 'styled-components';
import { Button } from '../Button';

type ButtonProps = {
  isSelected?: boolean;
};
export const StyledButton = styled(Button)<ButtonProps>`
  width: max-content;
  font-size: ${({ theme }) => theme.FONT_SIZE.HEADING_3};
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.PRIMARY_BLACK_500};
  border: 2px solid ${({ theme }) => theme.COLORS.PRIMARY_BLACK_500};
  border-radius: 10px;
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.COLORS.PRIMARY_GREY_300 : 'transparent'};

  .selected {
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_GREY_300};
  }

  &:hover {
    transition: background-color 0.6s;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_GREY_300};
  }
`;
