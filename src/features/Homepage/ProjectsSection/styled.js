import styled from "styled-components";
import { BaseButton } from "../../../components/Button";

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin: 24px auto 120px;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    margin-bottom: 84px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    gap: 16px;
    margin-bottom: 48px;
  }
`;

export const ProjectTile = styled.div`
  background-color: ${({ theme }) => theme.colors.tile.background};
  box-shadow: 
    0px 16px 58px ${({ theme }) => theme.colors.tile.shadow}, 
    0px -2px 50px ${({ theme }) => theme.colors.tile.shadow};
  padding: 56px;
  border-radius: 4px;
  border: 6px solid ${({ theme }) => theme.colors.tile.border};
  transition: 
    border 0.3s ease, 
    background-color 0.3s ease, 
    box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
  z-index: 1;

  &:hover {
    border: 6px solid ${({ theme }) => theme.colors.tile.hover};
  }

  ${({ isLastTwo }) =>
    isLastTwo &&
    `
      filter: blur(5px);
      opacity: 0.7;
      transition: filter 0.3s ease, opacity 0.3s ease;
      pointer-events: none;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    ${({ isHiddenOnTablet }) =>
    isHiddenOnTablet &&
    `
        display: none;
      `}
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    padding: 24px;
    gap: 16px;
  }
`;

export const ProjectTitle = styled.h3`
  color: ${({ theme }) => theme.colors.blue};
  font-size: ${({ theme }) => theme.fontSizes.headlines.small.default};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin: 0;
  line-height: 29px;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    line-height: 25px;
    font-size: ${({ theme }) => theme.fontSizes.headlines.small.tablet};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    line-height: 20px;
    font-size: ${({ theme }) => theme.fontSizes.headlines.small.mobile};
  }
`;

export const ProjectDescription = styled.p`
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

export const ProjectLink = styled(ProjectDescription).attrs({ as: 'a' })`
  color: ${({ theme }) => theme.colors.blue};
  text-decoration-color: rgba(3, 102, 214, 0.2);
  text-underline-offset: 5px;
  text-decoration-thickness: 1px;
  transition: 
    color 0.3s ease,
    text-decoration-color 0.3s ease,
    transform 0.3s ease;
  cursor: ${({ theme }) => theme.cursor.default};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    text-decoration-color: ${({ theme }) => theme.colors.blue};
    transform: scale(1.01);
  }
`;

export const ProjectLinks = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 8px;
  align-items: center;
`;

export const Button = styled(BaseButton).attrs({ as: 'button' })`
  cursor: ${({ theme }) => theme.cursor.pointer};
  font-weight: normal;
`;

export const SeeMoreButtonContainer = styled.div`
  position: absolute;
  bottom: 22%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    bottom: 13%;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    bottom: 15%;
  }
`;

export const SeeLessButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: -90px auto 120px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: -60px auto 84px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    margin: -30px auto 48px;
  }
`;