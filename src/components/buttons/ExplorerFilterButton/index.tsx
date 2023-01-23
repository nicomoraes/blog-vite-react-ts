import React, { forwardRef, HTMLAttributes } from 'react';
import { StyledButton } from './styles';

interface IExplorerFilterButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string;
  isSelected?: boolean;
}

export const ExplorerFilterButton = forwardRef<HTMLButtonElement, IExplorerFilterButtonProps>(
  ({ text, isSelected, ...rest }, ref) => {
    return (
      <StyledButton ref={ref} isSelected={isSelected} {...rest}>
        {text}
      </StyledButton>
    );
  },
);

ExplorerFilterButton.displayName = 'ExplorerFilterButton';
