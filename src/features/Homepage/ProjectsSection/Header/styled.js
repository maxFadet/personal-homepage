import styled from "styled-components";
import { ReactComponent as GithubIcon } from "../../../../components/Resources/Icons/Github.svg";

export const HeaderWrapper = styled.header`
  width: 195px;
  margin: 72px auto 0;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    margin: 60px auto 0;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    margin: 48px auto 0;
  }
`;

export const GithubMark = styled(GithubIcon)`
  color: ${({ theme }) => theme.colors.blue};
  width: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    width: 32px;
  }
`;

export const HeaderTitle = styled.h2`
  color: ${({ theme }) => theme.colors.textSecondaryColor};
  font-size: ${({ theme }) => theme.fontSizes.headlines.medium.default};
  font-weight: ${({ theme }) => theme.fontWeights.heavy};
  line-height: ${({ theme }) => theme.lineHeight.small};;
  text-align: center;
  margin: 12px 0 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    font-size: ${({ theme }) => theme.fontSizes.headlines.medium.tablet};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    font-size: ${({ theme }) => theme.fontSizes.headlines.medium.mobile};
  }
`;

export const HeaderSubtitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.paragraph.large.default};
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondaryColor};
  font-weight: normal;
  line-height: ${({ theme }) => theme.lineHeight.large};;

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    font-size: ${({ theme }) => theme.fontSizes.paragraph.large.mobile};
  }
`;