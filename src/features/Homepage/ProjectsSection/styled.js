import styled from "styled-components";
import { ButtonLink } from "../../../components/Button";

export const ProjectGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin: 24px auto 120px;
  position: relative;
  list-style: none;
  padding: 0;
  transition: max-height 0.5s ease;
  max-height: ${({ isExpanded }) => (isExpanded ? '2000px' : '500px')};
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    margin-bottom: 84px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    gap: 16px;
    margin-bottom: 48px;
  }
`;


export const ProjectTile = styled.li`
  background-color: ${({ theme }) => theme.colors.tile.background};
  box-shadow: 
    0px 16px 58px ${({ theme }) => theme.colors.tile.shadow}, 
    0px -2px 50px ${({ theme }) => theme.colors.tile.shadow};
  padding: 56px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  border: 6px solid ${({ theme }) => theme.colors.tile.border};
  transition: 
    border 0.3s ease, 
    background-color 0.3s ease, 
    box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;

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
  line-height: ${({ theme }) => theme.lineHeight.large};;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    line-height: ${({ theme }) => theme.lineHeight.medium};;
    font-size: ${({ theme }) => theme.fontSizes.headlines.small.tablet};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    line-height: ${({ theme }) => theme.lineHeight.small};;
    font-size: ${({ theme }) => theme.fontSizes.headlines.small.mobile};
  }
`;

export const ProjectDescription = styled.p`
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

export const Button = styled(ButtonLink).attrs({ as: 'button' })`
  cursor: ${({ theme }) => theme.cursor.pointer};
  font-weight: normal;
`;

export const SeeMoreButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: ${({ isExpanded }) => (isExpanded ? '20px auto 0' : '-90px auto 120px')};
  transition: margin 0.5s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: ${({ isExpanded }) => (isExpanded ? '20px auto 0' : '-60px auto 84px')};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    margin: ${({ isExpanded }) => (isExpanded ? '20px auto 0' : '-30px auto 48px')};
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