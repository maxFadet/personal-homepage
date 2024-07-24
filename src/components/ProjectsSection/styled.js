import styled from "styled-components";
import { ReactComponent as GithubIcon } from '../../images/mark-github.svg';

export const Container = styled.article`
  padding: 0;
  display: grid;
  grid-template-columns: auto;
  grid-gap: 72px;
  align-items: center;
`;

export const HeaderWrapper = styled.header`
  width: 195px;
  margin: auto;
  text-align: center;
`;

export const GithubMark = styled(GithubIcon)`
  color: ${({ theme }) => theme.color.scienceBlue};

  @media (max-width: 480px) {
    width: 32px;
  }
`;

export const Header = styled.h2`
  color: ${({ theme }) => theme.color.mineShaft};
  font-size: 30px;
  font-weight: 900;
  line-height: 36px;
  text-align: center;
  margin: 12px 0 8px;

  @media (max-width: 1200px) {
    line-height: 29px;
    font-size: 24px;
  }

  @media (max-width: 480px) {
    line-height: 22px;
    font-size: 18px;
  }
`;

export const SubHeader = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin: 0;
  color: ${({ theme }) => theme.color.mineShaft};

  @media (max-width: 1200px) {
    line-height: 26px;
  }

  @media (max-width: 480px) {
    line-height: 24px;
    font-size: 17px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  padding-top: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Tile = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 
  rgba(9, 10, 51, 0.03) 0px 16px 58px, 
  rgba(9, 10, 51, 0.02) 0px -2px 50px;
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

  @media (max-width: 1200px) {
    padding: 40px;
  }

  @media (max-width: 480px) {
    padding: 24px;
    gap: 16px;
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.color.scienceBlue};
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  line-height: 29px;

  @media (max-width: 1200px) {
    line-height: 25px;
    font-size: 20px;
  }

  @media (max-width: 480px) {
    line-height: 20px;
    font-size: 16px;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.color.slateGray};
  font-size: 18px;
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

export const Links = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 8px;
  align-items: center;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.color.scienceBlue};
  font-size: 18px;
  line-height: 25px;
  text-decoration: none;
`;
