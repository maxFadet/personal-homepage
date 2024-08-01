import styled from "styled-components";

export const Article = styled.footer`
  max-width: 691px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start; 

  @media (max-width: 1200px) {
    gap: 18px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

export const Caption = styled.div`
  line-height: 15px;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.textSecondaryColor};
  font-size: 32px;
  font-weight: 900;
  line-height: 38.73px;
  text-decoration: none;
  transition: color 0.3s ease 0s;

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }

  @media (max-width: 767px) {
    font-size: 18px;
    line-height: 21.78px;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.textSecondaryColor};
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  margin: 0;

  @media (max-width: 1200px) {
    line-height: 21px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    line-height: 17px;
    font-size: 14px;
  }
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  padding-top: 24px;

  @media (max-width: 1200px) {
    padding-top: 20px;
    gap: 20px;
  }

  @media (max-width: 480px) {
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
    @media (max-width: 1200px) {
    width: 40px;
    height: 40px;
    }

    @media (max-width: 480px) {
    width: 32px;
    height: 232x;
    }
  }
`;
