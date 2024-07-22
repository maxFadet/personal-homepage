import styled from "styled-components";
import { ReactComponent as markGithub } from '../../images/mark-github.svg';

export const Container = styled.article`
  padding: 0;
  display: grid;
  grid-template-columns: auto;
  grid-gap: 72px;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Wrapper = styled.div`
  width: 195px;
  margin: auto;
  text-align: center;
`;

export const Mark = styled(markGithub)`
   color: ${({ theme }) => theme.color.scienceBlue};
`;

export const Header = styled.h2`
  color: ${({ theme }) => theme.color.mineShaft};
  font-size: 30px;
  font-weight: 900;
  line-height: 36.31px;
  letter-spacing: 0.05em;
  text-align: center;
  margin: 12px 0 8px;
`;

export const SubHeader = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin: 0;
  color: ${({ theme }) => theme.color.mineShaft}
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  padding-top: 24px;

  @media (max-width: 990px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03);
  box-shadow: 0px -2px 50px 0px rgba(9, 10, 51, 0.02);
  padding: 56px;
  border-radius: 4px;
  border: 6px solid ${({ theme }) => theme.color.iron};
  transition: 0.3s;
  
  &:hover {
    border: 6px solid rgba(3, 102, 214, 0.2);
  }
`;

export const ProjectTitle = styled.h3`
  color: ${({ theme }) => theme.color.scienceBlue};
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  line-height: 29.05px;
  letter-spacing: 0.05em;
`;

export const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.color.slateGray};
  font-size: 16px;
  line-height: 22px;
  margin: 24px 0;
`;

export const ProjectLinks = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px;
`;

export const ProjectLink = styled.a`
  color: ${({ theme }) => theme.color.scienceBlue};
  font-size: 16px;
  line-height: 22px;
  text-decoration: none;
`;
