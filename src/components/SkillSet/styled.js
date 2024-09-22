import styled from "styled-components";
import { ReactComponent as BulletImage } from "./bullet.svg";

export const SectionContainer = styled.article`
  background-color: ${({ theme }) => theme.colors.tile.background};
  margin: 72px auto;
  box-shadow: 
  ${({ theme }) => theme.colors.tile.shadow} 0px 16px 58px, 
  ${({ theme }) => theme.colors.tile.shadow} 0px -2px 50px;
  padding: 32px;
  border-radius: ${({ theme }) => theme.borderRadius.small};

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding: 24px;
    margin: 60px auto 0;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    padding: 16px;
    margin: 48px auto 0;
  }
`;

export const SectionHeader = styled.h2`
  color: ${({ theme }) => theme.colors.textSecondaryColor};
  font-size: ${({ theme }) => theme.fontSizes.headlines.medium.default};
  font-weight:  ${({ theme }) => theme.fontWeights.heavy};
  line-height: 1.2;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    font-size: ${({ theme }) => theme.fontSizes.headlines.medium.tablet};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    font-size: ${({ theme }) => theme.fontSizes.headlines.medium.mobile};
  }
`;

export const SkillList = styled.ul`
  display: grid;
  grid-gap: 8px;
  list-style: none;
  border-top: 1px solid ${({ theme }) => theme.colors.backgroundSwitcher};
  padding: 32px 0 0;
  grid-template-columns: repeat(auto-fill, minmax(auto, 314px));
  justify-content: space-between;
  margin-bottom: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding-top: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    padding-top: 16px;
  }
`;

export const SkillItem = styled.li`
  display: flex;
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) { 
    line-height: 1.2;
  }
`;

export const Bullet = styled(BulletImage)`
  color: ${({ theme }) => theme.colors.blue};
  margin-right: 16px;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) { 
    width: 6px;
    margin-right: 8px;
  }
`;

export const SkillText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.paragraph.medium.default};
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    line-height: 1.2;
    font-size: ${({ theme }) => theme.fontSizes.paragraph.medium.mobile};
  }
`;