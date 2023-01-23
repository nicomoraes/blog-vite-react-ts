import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './globals';
import theme from './themes/dark';

type StyleThemeProviderProps = {
  children: React.ReactNode;
};

export const StyledThemeProvider = ({ children }: StyleThemeProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  );
};
