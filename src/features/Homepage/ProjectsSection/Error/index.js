import { ErrorIcon, Paragraph, Title, Wrapper } from "./styled";
import { BaseButton } from "../../../../components/Button"

export const Error = () => {
    return (
        <Wrapper>
            <ErrorIcon />
            <Title>
                Ooops! Something went wrong...
            </Title>
            <Paragraph>
                Sorry, failed to load Github projects. <br />
                You can check them directly on Github.
            </Paragraph>
            <BaseButton href="https://github.com/maxFadet" target="_blank" title="My Github">
                Go to Github
            </BaseButton>
        </Wrapper>
    );
};