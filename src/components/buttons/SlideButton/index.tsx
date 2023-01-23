import React from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { useTheme } from 'styled-components';
import { StyledButton, StyledButtonProps } from './styles';

const ARROW_SIZE = 30;

type SlideButtonProps = { onClick?(): void } & StyledButtonProps;

export const SlideButton: React.FC<SlideButtonProps> = ({ arrowDirection, ...rest }) => {
  const { COLORS } = useTheme();
  return (
    <StyledButton arrowDirection={arrowDirection}>
      {arrowDirection === 'right' ? (
        <BsArrowRight
          size={ARROW_SIZE}
          color={COLORS.PRIMARY_GREY_500}
          style={{ display: 'block', margin: 'auto' }}
          {...rest}
        />
      ) : (
        <BsArrowLeft
          size={ARROW_SIZE}
          color={COLORS.PRIMARY_GREY_500}
          style={{ display: 'block', margin: 'auto' }}
          {...rest}
        />
      )}
    </StyledButton>
  );
};
