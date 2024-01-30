import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MoviesContextProvider } from './context/MoviesContext.js';
import './index.css';

const queryClient = new QueryClient({});
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MoviesContextProvider>
        <App />
      </MoviesContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
