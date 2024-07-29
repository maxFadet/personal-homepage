import React from 'react';
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import GlobalStyle from './GlobalStyle';
import theme from './theme';
import Homepage from './features/Homepage';
import store from './store';

const App = () => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Homepage />
        </ThemeProvider>
    </Provider>
);

export default App;
