import React, { HTMLAttributes } from 'react';
import { StyledButton } from './styles';
import { BsArrowRight } from 'react-icons/bs';
import { useTheme } from 'styled-components';
import { Link } from 'react-router-dom';

interface ISeeMoreProps extends HTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const SeeMoreButton: React.FC<ISeeMoreProps> = ({ text, ...rest }) => {
  const { COLORS } = useTheme();
  return (
    <Link to={'/explorer'}>
      <StyledButton {...rest}>
        {text}
        <BsArrowRight size={20} color={COLORS.PRIMARY_WHITE_100} />
      </StyledButton>
    </Link>
  );
};
