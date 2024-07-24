import styled from "styled-components";
import { ReactComponent as Ellipse } from '../../images/Ellipse.svg';

export const Container = styled.article`
  background-color: ${({ theme }) => theme.color.white};
  margin: 72px auto;
  box-shadow: 
  rgba(9, 10, 51, 0.03) 0px 16px 58px, 
  rgba(9, 10, 51, 0.02) 0px -2px 50px;
  padding: 32px;
  border-radius: 4px;

  @media (max-width: 480px) {
    padding: 16px;
  }

  @media (max-width: 1200px) {
    padding: 24px;
  }
`;

export const Header = styled.h2`
  color: ${({ theme }) => theme.color.mineShaft};
  font-size: 30px;
  font-weight: 900;
  line-height: 36px;
  margin: 0;

  @media (max-width: 1200px) {
    line-height: 29px;
    font-size: 24px;
  }

  @media (max-width: 480px) {
    line-height: 22px;
    font-size: 18px;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-gap: 8px;
  line-height: 25px;
  list-style: none;
  border-top: 1px solid rgba(209, 213, 218, 0.3);
  padding: 32px 0 0;
  grid-template-columns: repeat(auto-fill, minmax(auto, 314px));
  justify-content: space-between;
  margin-bottom: 0;

  @media (max-width: 1200px) {
    padding-top: 24px;
  }

  @media (max-width: 480px) {
    padding-top: 16px;
  }
`;

export const Item = styled.li`
display: flex;
align-items: center;
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.color.slateGray};
font-size: 18px;
font-weight: 400;
line-height: 25.2px;
text-align: left;
margin-left: 16px;

@media (max-width: 480px) {
    line-height: 17px;
    font-size: 14px;
  }
`;

export const Bullet = styled(Ellipse)`
  color: rgba(3, 102, 214, 1);

  @media (max-width: 480px) {
    width: 6px;
  }
`;