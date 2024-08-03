import styled from "styled-components";

export const Container = styled.article`
  background-color: ${({ theme }) => theme.colors.backgroundTile};
  margin: 72px auto;
  box-shadow: 
    rgba(9, 10, 51, 0.03) 0px 16px 58px, 
    rgba(9, 10, 51, 0.02) 0px -2px 50px;
  padding: 32px;
  border-radius: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding: 24px;
    margin: 60px auto 0;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    padding: 16px;
    margin: 48px auto 0;
  }
`;

export const Header = styled.h2`
  color: ${({ theme }) => theme.colors.textSecondaryColor};
  font-size: ${({ theme }) => theme.fontSizes.headlines.medium.default};
  font-weight: 900;
  line-height: 36px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    line-height: 29px;
    font-size: ${({ theme }) => theme.fontSizes.headlines.medium.tablet};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    line-height: 22px;
    font-size: ${({ theme }) => theme.fontSizes.headlines.medium.mobile};
  }
`;

export const List = styled.ul`
  display: grid;
  grid-gap: 8px;
  line-height: 25px;
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

export const Item = styled.li`
  position: relative;
  padding-left: 27px;
  line-height: 0;

  ::before {
    content: "•";
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.blue};
    font-size: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    ::before {
      font-size: 20px;
      padding-left: 0;
    }
  }
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.textDominantColor};
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    line-height: 17px;
    font-size: 14px;
    margin: -10px;
  }
`;
