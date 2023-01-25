import React, { HTMLAttributes } from 'react';
import { StyledButton, StyledButtonProps } from './styles';

interface IPrimaryButtonProps extends HTMLAttributes<HTMLButtonElement>, StyledButtonProps {
  text?: string;
  disabled?: boolean;
}

export const PrimaryButton: React.FC<IPrimaryButtonProps> = ({ text, children, ...rest }) => {
  return <StyledButton {...rest}>{text ? text : children}</StyledButton>;
};
