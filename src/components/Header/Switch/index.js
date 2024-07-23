import { Wrapper, Text, Button, Icon, IconWrapper } from "./styled";

export const Switch = () => {
    return (
        <Wrapper>
            <Text>
                DARK MODE OFF
            </Text>
            <Button>
                <IconWrapper>
                    <Icon />
                </IconWrapper>
            </Button>
        </Wrapper>
    );
};