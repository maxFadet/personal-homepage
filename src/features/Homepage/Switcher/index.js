import {
    SwitcherWrapper,
    SwitcherCaption,
    SwitcherButton,
    SwitcherIcon,
    SwitcherIconWrapper
} from "./styled";

export const ThemeSwitcher = ({ darkMode, toggleTheme }) => (
    <SwitcherWrapper>
        <SwitcherCaption>
            dark mode {darkMode ? "on" : "off"}
        </SwitcherCaption>
        <SwitcherButton onClick={toggleTheme}>
            <SwitcherIconWrapper darkMode={darkMode}>
                <SwitcherIcon />
            </SwitcherIconWrapper>
        </SwitcherButton>
    </SwitcherWrapper>
);