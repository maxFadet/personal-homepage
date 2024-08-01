import styled, { keyframes } from "styled-components";
import { ReactComponent as Loader } from '../../../images/Loader.svg';

export const Wrapper = styled.div`
   text-align: center;
   margin: 88px 0 140px;

   @media (max-width: 1200px) {
    margin: 56px 0 94px;
  }

   @media (max-width: 480px) {
    margin: 24px 0 48px;
  }
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  margin: 0;
`;

const rotate = keyframes`
  to {
    transform: rotate(360deg);
}
`;

export const LoadingIcon = styled(Loader)`
  margin-top: 48px;

  circle:nth-child(2) {
    stroke: ${({ theme }) => theme.colors.blue};
    animation: ${rotate} 2s linear infinite;
    transform-origin: center;
  }

  @media (max-width: 1200px) {
    width: 130px;
    margin-top: 36px;
  }

  @media (max-width: 480px) {
    width: 100px;
    margin-top: 24px;
  }
`;