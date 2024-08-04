import { useDispatch, useSelector } from "react-redux";
import { Wrapper, Caption, Button, Icon, IconWrapper } from "./styled";
import { selectTheme, switchTheme } from "./themeSlice";

export const Switcher = () => {
    const darkMode = useSelector(selectTheme);
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <Caption>
                dark mode {darkMode ? "on" : "off"}
            </Caption>
            <Button onClick={() => dispatch(switchTheme())}>
                <IconWrapper darkMode={darkMode}>
                    <Icon />
                </IconWrapper>
            </Button>
        </Wrapper>
    );
};