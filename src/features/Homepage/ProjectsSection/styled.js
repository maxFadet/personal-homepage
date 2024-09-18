import styled from "styled-components";

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin: 24px auto 0;
  padding-bottom: 50px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
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
  transition: border 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 24px;

  &:hover {
    border: 6px solid ${({ theme }) => theme.colors.tile.hover};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding: 40px;
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

const TextBase = styled.p`
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

export const ProjectDescription = styled(TextBase)``;

export const ProjectLink = styled(TextBase).attrs({ as: 'a' })`
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

export const SeeMoreButton = styled.button`
  display: block;
  margin: 0 auto 130px;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.blue};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  z-index: 2;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;

export const SeeLessButton = styled(SeeMoreButton)`
  background-color: ${({ theme }) => theme.colors.blue};
  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;