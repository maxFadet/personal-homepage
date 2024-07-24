import { Wrapper, Text, Button, Icon, IconWrapper } from "./styled";

export const Switch = () => {
    return (
        <Wrapper>
            <Text>
                dark mode off
            </Text>
            <Button>
                <IconWrapper>
                    <Icon />
                </IconWrapper>
            </Button>
        </Wrapper>
    );
};