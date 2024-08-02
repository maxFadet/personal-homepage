import styled from "styled-components";
import { ReactComponent as GithubIcon } from '../../Footer/Github.svg';

export const HeaderWrapper = styled.header`
  width: 195px;
  margin: 72px auto 0;
  text-align: center;

  @media (max-width: 1200px) {
    margin: 60px auto 0;
  }
  
  @media (max-width: 480px) {
    margin: 48px auto 0;
  }
`;

export const GithubMark = styled(GithubIcon)`
  color: ${({ theme }) => theme.colors.blue};
  width: 40px;

  @media (max-width: 480px) {
    width: 32px;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.textSecondaryColor};
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

export const SubTitle = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondaryColor};

  @media (max-width: 1200px) {
    line-height: 26px;
  }

  @media (max-width: 480px) {
    line-height: 24px;
    font-size: 17px;
  }
`;