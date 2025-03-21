import { ErrorIcon, ErrorTitle, ErrorParagraph, ErrorWrapper } from "./styled";
import { ButtonLink } from "../../../../components/Button";

export const Error = () => (
    <ErrorWrapper>
        <ErrorIcon />
        <ErrorTitle>Oops! Something went wrong...</ErrorTitle>
        <ErrorParagraph>
            Sorry, failed to load Github projects.<br />
            You can check them directly on Github.
        </ErrorParagraph>
        <ButtonLink
            href="https://github.com/maxFadet"
            target="_blank"
            title="My GitHub">
            Go to Github
        </ButtonLink>
    </ErrorWrapper>
);