import { Wrapper, Text, LoadingIcon } from "./styled";

export const Loading = () => {
    return (
        <Wrapper>
            <Text>
                Please wait, projects are being loaded...
            </Text>
            <LoadingIcon />
        </Wrapper>
    );
}