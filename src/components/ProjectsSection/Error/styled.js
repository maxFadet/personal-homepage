import styled from "styled-components";
import { ReactComponent as Danger } from '../../../images/Danger.svg';

export const Wrapper = styled.div`
   text-align: center;
   margin: 88px 0 140px;

   @media (max-width: 1200px) {
    margin: 60px auto 100px;
  }
  
  @media (max-width: 480px) {
    margin: 38px auto 70px;
  }
`;

export const ErrorIcon = styled(Danger)`
  @media(max-width: 480px) {
    width: 32px;
  }
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  margin: 23px 0 32px;
  
  @media (max-width: 1200px) {
    margin: 17px 0 24px;
  }

  @media(max-width: 480px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const Paragraph = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  margin: 0;

  @media (max-width: 1200px) {
    line-height: 24px;
  }

  @media(max-width: 480px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const ButtonLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  padding: 12px 16px;
  margin-top: 32px;
  border-radius: 4px;
  background: ${({ theme }) => theme.color.scienceBlue};
  color: ${({ theme }) => theme.color.white};
  border: 1px solid rgba(209, 213, 218, 0.3);
  text-decoration: none;
  transition: outline 0.3s ease 0s;
  white-space: nowrap;

  &:hover {
    outline: 3px solid rgba(140, 194, 255);
  }

  &:active {
    box-shadow: 0px 2px 0px 0px rgba(20, 70, 32, 0.2) inset;
    outline: none;
  }
`;
