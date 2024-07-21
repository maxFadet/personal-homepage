import styled from "styled-components";
import { ReactComponent as Ellipse } from '../../images/Ellipse.svg';

export const Container = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  background-color: ${({ theme }) => theme.color.white};
  margin: 72px auto;
  box-shadow: rgba(9, 10, 51, 0.02) 0px -2px 50px 0px;
  padding: 32px;
  grid-gap: 72px;
  align-items: center;
  border-radius: 4px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Header = styled.header`
  color: ${({ theme }) => theme.color.mineShaft};
  font-size: 30px;
  font-weight: 900;
  line-height: 36.31px;
  letter-spacing: 0.05em;
`;

export const Table = styled.div`
  border-top: 1px solid rgba(209, 213, 218, 0.3);
  padding-top: 32px;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 8px 115px;
  line-height: 25px;
  list-style: none;
  padding: 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 8px 0;
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
letter-spacing: 0.05em;
text-align: left;
margin-left: 16px;
`;

export const Bullet = styled(Ellipse)`
  color: rgba(3, 102, 214, 1);
`;