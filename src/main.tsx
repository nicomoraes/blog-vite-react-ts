import React from 'react';
import ReactDOM from 'react-dom/client';

import Router from './index.routes';
import Footer from './components/Footer';
import { StyledThemeProvider } from '@styles/StyledThemeProvider';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StyledThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Router />
        <Footer />
      </QueryClientProvider>
    </StyledThemeProvider>
  </React.StrictMode>,
);
