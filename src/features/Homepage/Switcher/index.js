import { useDispatch, useSelector } from "react-redux";
import { Wrapper, Text, Button, Icon, IconWrapper } from "./styled";
import { selectTheme, switchTheme } from "./themeSlice";

export const Switcher = () => {
    const darkMode = useSelector(selectTheme);
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <Text>
                dark mode {darkMode ? "on" : "off"}
            </Text>
            <Button onClick={() => dispatch(switchTheme())}>
                <IconWrapper darkMode={darkMode}>
                    <Icon />
                </IconWrapper>
            </Button>
        </Wrapper>
    );
};