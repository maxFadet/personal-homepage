import styled from "styled-components";

export const Article = styled.footer`
  max-width: 691px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start; 

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    gap: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    gap: 12px;
  }
`;

export const Caption = styled.p`
  line-height: 15px;
  font-weight:  ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.paragraph.small.default};
  letter-spacing: 0;
  text-transform: uppercase;
  margin: 0;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.textSecondaryColor};
  font-size: ${({ theme }) => theme.fontSizes.headlines.large.default};
  font-weight:  ${({ theme }) => theme.fontWeights.heavy};
  line-height: 38.73px;
  text-decoration: none;
  transition: color 0.3s ease 0s;

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.headlines.large.mobile};
    line-height: 22px;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.textSecondaryColor};
  font-size: ${({ theme }) => theme.fontSizes.paragraph.medium.default};
  line-height: 25px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    line-height: 21px;
    font-size: ${({ theme }) => theme.fontSizes.paragraph.medium.tablet};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    line-height: 17px;
    font-size: ${({ theme }) => theme.fontSizes.paragraph.medium.mobile};
  }
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  padding-top: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding-top: 20px;
    gap: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    padding-top: 12px;
    gap: 16px;
  }
`;

export const LinkSocialMedia = styled.a`
  color: ${({ theme }) => theme.colors.textSecondaryColor};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }

  svg {
    @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: 40px;
    height: 40px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    width: 32px;
    height: 232x;
    }
  }
`;