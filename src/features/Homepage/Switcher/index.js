import { useDispatch, useSelector } from "react-redux";
import {
    SwitcherWrapper,
    SwitcherCaption,
    SwitcherButton,
    SwitcherIcon,
    SwitcherIconWrapper
} from "./styled";
import { selectTheme, switchTheme } from "./themeSlice";

export const ThemeSwitcher = () => {
    const isDarkMode = useSelector(selectTheme);
    const dispatch = useDispatch();

    return (
        <SwitcherWrapper>
            <SwitcherCaption>
                dark mode {isDarkMode ? "on" : "off"}
            </SwitcherCaption>
            <SwitcherButton onClick={() => dispatch(switchTheme())}>
                <SwitcherIconWrapper darkMode={isDarkMode}>
                    <SwitcherIcon />
                </SwitcherIconWrapper>
            </SwitcherButton>
        </SwitcherWrapper>
    );
};