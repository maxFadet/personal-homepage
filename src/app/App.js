import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from "styled-components";
import GlobalStyle from '../theme/GlobalStyle';
import Homepage from '../features/Homepage';
import { lightTheme, darkTheme } from '../theme/theme';
import { selectTheme } from '../features/Homepage/Switcher/themeSlice';

function App() {
    const darkMode = useSelector(selectTheme);

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <GlobalStyle />
            <Homepage />
        </ThemeProvider>
    );
}

export default App;
