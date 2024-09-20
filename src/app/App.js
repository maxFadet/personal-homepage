import { ThemeProvider } from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import Homepage from "../features/Homepage";
import { lightTheme, darkTheme } from "../theme/theme";
import { useSelector } from "react-redux";

function App() {
    const darkMode = useSelector((state) => state.theme.darkMode);

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <GlobalStyle />
            <Homepage />
        </ThemeProvider>
    );
}

export default App;