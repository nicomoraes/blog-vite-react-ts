import React, { HTMLAttributes } from 'react';
import { StyledButton, StyledButtonProps } from './styles';

interface IPrimaryButtonProps extends HTMLAttributes<HTMLButtonElement>, StyledButtonProps {
  text: string;
}

export const PrimaryButton: React.FC<IPrimaryButtonProps> = ({ text, ...rest }) => {
  return <StyledButton {...rest}>{text}</StyledButton>;
};
