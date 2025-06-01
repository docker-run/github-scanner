import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router';
import Repositories from 'modules/repositories/Repositories';
import Repository from 'modules/repositories/Repository';
import './index.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    h1: { fontSize: 24 }
  }
});

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route element={<Repositories />} path="/" />
            <Route element={<Repository />} path="/repository/:owner/:name" />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  </StrictMode>,
)
