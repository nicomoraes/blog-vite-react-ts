import React from 'react';
import { PageContainer } from './styles';

type ContainerProps = { children: React.ReactNode };

export const Container = ({ children }: ContainerProps) => {
  return <PageContainer>{children}</PageContainer>;
};
