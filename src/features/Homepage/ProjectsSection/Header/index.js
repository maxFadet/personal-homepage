import React from "react";
import { HeaderWrapper, GithubMark, HeaderTitle, HeaderSubtitle } from "./styled";

const Header = () => {
    return (
        <HeaderWrapper>
            <GithubMark />
            <HeaderTitle>Portfolio</HeaderTitle>
            <HeaderSubtitle>My recent projects</HeaderSubtitle>
        </HeaderWrapper>
    );
};

export default Header;