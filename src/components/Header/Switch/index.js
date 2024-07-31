import { useDispatch, useSelector } from "react-redux";
import { Wrapper, Text, Button, Icon, IconWrapper } from "./styled";
import { selectTheme, toggleMode } from "../themeSlice";

export const Switch = () => {
    const darkMode = useSelector(selectTheme);
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <Text>
                dark mode {darkMode ? "on" : "off"}
            </Text>
            <Button onClick={() => dispatch(toggleMode())}>
                <IconWrapper>
                    <Icon />
                </IconWrapper>
            </Button>
        </Wrapper>
    );
};