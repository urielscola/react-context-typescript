import React from 'react';
import { ThemeProvider } from 'styled-components';
import { CounterProvider } from './contexts/ducks/counter';
import { GlobalStyles, theme } from './assets/styles';
import Routes from './routes';
import Header from './components/Header';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <CounterProvider>
      <>
        <GlobalStyles />
        <main>
          <Header />
          <Routes />
        </main>
      </>
    </CounterProvider>
  </ThemeProvider>
);

export default App;
