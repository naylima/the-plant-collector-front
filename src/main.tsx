import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { QueryClient, QueryClientProvider } from 'react-query';
import { CartProvider } from './contexts/CartContext';
import { GlobalStyle } from './styles/GlobalStyles';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CartProvider>
      <QueryClientProvider client={queryClient}>      
        <App />
        <GlobalStyle />
        <ToastContainer />         
      </QueryClientProvider>
    </CartProvider>  
  </React.StrictMode>
);
