import styled, { keyframes } from "styled-components";
import { ReactComponent as Loader } from "./Loader.svg";

export const Wrapper = styled.div`
   text-align: center;
   margin: 88px 0 140px;

   @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    margin: 56px 0 94px;
  }

   @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    margin: 24px 0 48px;
  }
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraph.large.default};
  line-height: 28px;
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondaryColor};;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: 130px;
    margin-top: 36px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    width: 100px;
    margin-top: 24px;
  }
`;