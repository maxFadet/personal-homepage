import styled from "styled-components";

export const FooterWrapper = styled.footer`
  max-width: 691px;
`;

export const FooterContent = styled.address`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  font-style: unset;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    gap: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    gap: 12px;
  }
`;

export const FooterHeading = styled.h2`
  line-height: ${({ theme }) => theme.lineHeight.medium};;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.paragraph.small.default};
  letter-spacing: 0;
  text-transform: uppercase;
  margin: 0;
`;

export const EmailLink = styled.a`
  color: ${({ theme }) => theme.colors.textSecondaryColor};
  font-size: ${({ theme }) => theme.fontSizes.headlines.large.default};
  font-weight: ${({ theme }) => theme.fontWeights.heavy};
  line-height: ${({ theme }) => theme.lineHeight.small};;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.headlines.large.mobile};
  }
`;

export const FooterText = styled.p`
  color: ${({ theme }) => theme.colors.textSecondaryColor};
  font-size: ${({ theme }) => theme.fontSizes.paragraph.medium.default};
  line-height: ${({ theme }) => theme.lineHeight.large};;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    line-height: ${({ theme }) => theme.lineHeight.medium};;
    font-size: ${({ theme }) => theme.fontSizes.paragraph.medium.tablet};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    line-height: ${({ theme }) => theme.lineHeight.small};;
    font-size: ${({ theme }) => theme.fontSizes.paragraph.medium.mobile};
  }
`;

export const SocialIcons = styled.div`
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

export const SocialMediaLink = styled.a`
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
      height: 32px;
    }
  }
`;