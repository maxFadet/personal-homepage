import { ErrorIcon, ErrorTitle, ErrorParagraph, ErrorWrapper } from "./styled";
import { BaseButton } from "../../../../components/Button";

export const Error = () => {
    return (
        <ErrorWrapper>
            <ErrorIcon />
            <ErrorTitle>Oops! Something went wrong...</ErrorTitle>
            <ErrorParagraph>
                Sorry, failed to load Github projects. <br />
                You can check them directly on Github.
            </ErrorParagraph>
            <BaseButton href="https://github.com/maxFadet" target="_blank" title="My GitHub">
                Go to Github
            </BaseButton>
        </ErrorWrapper>
    );
};