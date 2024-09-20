import { HeaderWrapper, GithubMark, HeaderTitle, HeaderSubtitle } from "./styled";

const Header = () => (
    <HeaderWrapper>
        <GithubMark />
        <HeaderTitle>Portfolio</HeaderTitle>
        <HeaderSubtitle>My recent projects</HeaderSubtitle>
    </HeaderWrapper>
);

export default Header;