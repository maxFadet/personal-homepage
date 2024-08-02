import { GithubMark, HeaderWrapper, Title, SubTitle } from "./styled"

export const Head = () => {
    return (
        <HeaderWrapper>
            <GithubMark />
            <Title>Portfolio</Title>
            <SubTitle>My recent projects</SubTitle>
        </HeaderWrapper>
    )
}