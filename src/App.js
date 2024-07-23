import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import theme from './theme';
import Homepage from './features/Homepage';

const App = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Homepage />
    </ThemeProvider>
);

export default App;
