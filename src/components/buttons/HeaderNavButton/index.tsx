import React, { HTMLAttributes } from 'react';
import { StyledButton } from './styles';
import { Link } from 'react-router-dom';

interface IHeaderNavButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string;
  to: string;
}

export const HeaderNavButton: React.FC<IHeaderNavButtonProps> = ({ text, to, ...rest }) => {
  return (
    <Link to={to}>
      <StyledButton {...rest}>{text}</StyledButton>
    </Link>
  );
};
