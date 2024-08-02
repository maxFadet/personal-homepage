import styled from "styled-components";
import { ReactComponent as Danger } from './Danger.svg';

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
  margin-bottom: 32px;

  @media (max-width: 1200px) {
    line-height: 24px;
  }

  @media(max-width: 480px) {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 24px;
  }
`;
