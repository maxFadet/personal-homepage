import { ButtonLink, ButtonText, ErrorIcon, Paragraph, Title, Wrapper } from "./styled";

export const Error = () => {
    <Wrapper>
        <ErrorIcon />
        <Title>
            Ooops! Something went wrong...
        </Title>
        <Paragraph>
            Sorry, failed to load Github projects.
            You can check them directly on Github.
        </Paragraph>
        <ButtonLink href="https://github.com/maxFadet" target="_blank" title="My Github">
            <ButtonText>Go to Github</ButtonText>
        </ButtonLink>
    </Wrapper>
};