import styled from "styled-components";
import { ReactComponent as GithubIcon } from '../../images/mark-github.svg';

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

export const HeaderWrapper = styled.div`
  width: 195px;
  margin: auto;
  text-align: center;
`;

export const GithubMark = styled(GithubIcon)`
  color: ${({ theme }) => theme.color.scienceBlue};
`;

export const Header = styled.h2`
  color: ${({ theme }) => theme.color.mineShaft};
  font-size: 30px;
  font-weight: 900;
  line-height: 36.31px;
  text-align: center;
  margin: 12px 0 8px;
`;

export const SubHeader = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin: 0;
  color: ${({ theme }) => theme.color.mineShaft};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  padding-top: 24px;

  @media (max-width: 990px) {
    grid-template-columns: 1fr;
  }
`;

export const Tile = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03);
  padding: 56px;
  border-radius: 4px;
  border: 6px solid ${({ theme }) => theme.color.iron};
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  gap: 24px;
  
  &:hover {
    border: 6px solid rgba(3, 102, 214, 0.2);
  }

  @media (max-width: 990px) {
    padding: 26px;
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.color.scienceBlue};
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  line-height: 29.05px;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.color.slateGray};
  font-size: 18px;
  line-height: 25px;
  margin: 0;
`;

export const Links = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.color.scienceBlue};
  font-size: 18px;
  line-height: 25px;
  text-decoration: none;
`;
