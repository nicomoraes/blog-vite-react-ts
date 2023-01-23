import React from 'react';
import { StyledDiv, StyledDivProps } from './styles';

type BoxProps = { children: React.ReactNode } & StyledDivProps;

export const Box = ({ children, ...rest }: BoxProps) => {
  return <StyledDiv {...rest}>{children}</StyledDiv>;
};
