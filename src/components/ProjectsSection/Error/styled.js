import styled from "styled-components";
import { ReactComponent as Danger } from '../../../images/Danger.svg';

export const Wrapper = styled.div`
   text-align: center;
   margin: 88px 0 140px;
`;

export const ErrorIcon = styled(Danger)`
  @media(max-width: 480px) {
    width: 40px;
    height: 40px;
    }
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
`;

export const Paragraph = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
`;

export const ButtonLink = styled.a`
  width: 154px;
  height: 49px;
  padding: 12px 16px;
  border-radius: 4px;
  background: ${({ theme }) => theme.color.scienceBlue};
  color: ${({ theme }) => theme.color.white};
  border: 1px solid rgba(209, 213, 218, 0.3);
  outline: transparent solid 3px;
  text-decoration: none;
  transition: outline 0.3s ease 0s;

  &:hover {
    outline: 3px solid rgba(140, 194, 255);
  }

  &:active {
    box-shadow: 0px 2px 0px 0px rgba(20, 70, 32, 0.2) inset;
    outline: none;
  }
`;

export const ButtonText = styled.div`
font-size: 20.06px;
font-weight: 600;
line-height: 24px;
text-align: center;
`;