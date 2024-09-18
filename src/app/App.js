import { ThemeProvider } from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import Homepage from "../features/Homepage";
import { lightTheme, darkTheme } from "../theme/theme";
import { useTheme } from "../features/Homepage/Switcher/useTheme";

function App() {
    const [darkMode, toggleTheme] = useTheme();

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <GlobalStyle />
            <Homepage darkMode={darkMode} toggleTheme={toggleTheme} />
        </ThemeProvider>
    );
}

export default App;