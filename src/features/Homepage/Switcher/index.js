import { useDispatch, useSelector } from "react-redux";
import {
    SwitcherWrapper,
    SwitcherCaption,
    SwitcherButton,
    SwitcherIcon,
    SwitcherIconWrapper
} from "./styled";
import { toggleTheme } from "./themeSlice";

export const ThemeSwitcher = () => {
    const dispatch = useDispatch();
    const darkMode = useSelector((state) => state.theme.darkMode);

    const handleToggle = () => {
        dispatch(toggleTheme());
    };

    return (
        <SwitcherWrapper>
            <SwitcherCaption>
                dark mode {darkMode ? "on" : "off"}
            </SwitcherCaption>
            <SwitcherButton onClick={handleToggle}>
                <SwitcherIconWrapper darkMode={darkMode}>
                    <SwitcherIcon />
                </SwitcherIconWrapper>
            </SwitcherButton>
        </SwitcherWrapper>
    );
};