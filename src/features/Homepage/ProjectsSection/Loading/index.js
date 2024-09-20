import { Wrapper, Text, LoadingIcon } from "./styled";

export const Loading = () => (
    <Wrapper>
        <Text>
            Please wait, projects are being loaded...
        </Text>
        <LoadingIcon />
    </Wrapper>
);