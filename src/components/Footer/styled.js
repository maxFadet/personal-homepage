import styled from "styled-components";

export const Article = styled.footer`
  margin-top: 120px;
  width: 691px;

  @media (max-width: 1120px) {
    grid-template-columns: 1fr;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Caption = styled.div`
  line-height: 15.6px;
  text-align: left;
  font-weight: 700;
  font-size: 12px;
  color: ${({ theme }) => theme.color.slateGray};
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.color.mineShaft};
  font-size: 32px;
  font-weight: 900;
  line-height: 38.73px;
  letter-spacing: 0.05em;
  text-decoration: none;
  transition: color 0.3s ease 0s;

  &:hover {
    color: ${({ theme }) => theme.color.scienceBlue};
  };
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.color.mineShaft};
  font-size: 18px;
  font-weight: 400;
  line-height: 25.2px;
  letter-spacing: 0.05em;
  margin: 0;
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  padding-top: 24px;
`;

export const LinkSocialMedia = styled.a`
  color: ${({ theme }) => theme.color.mineShaft};
  transition: color 0.3s ease;

  &:hover {
      color: ${({ theme }) => theme.color.scienceBlue};
  }
`;
