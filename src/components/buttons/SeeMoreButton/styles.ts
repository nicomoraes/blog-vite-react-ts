import styled from 'styled-components';
import { Button } from '../Button';

export const StyledButton = styled(Button)`
  color: ${({ theme }) => theme.COLORS.PRIMARY_BLACK_500};
  font-size: ${({ theme }) => theme.FONT_SIZE.HEADING_3};

  &:hover {
    color: ${({ theme }) => theme.COLORS.PRIMARY_BLACK_500}90;
  }

  margin: 0 auto;
`;
