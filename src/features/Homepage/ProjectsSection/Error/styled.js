import styled from "styled-components";
import { ReactComponent as DangerIcon } from './Danger.svg';

export const ErrorWrapper = styled.div`
  text-align: center;
  margin: 88px 0 140px;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    margin: 60px auto 100px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    margin: 38px auto 70px;
  }
`;

export const ErrorIcon = styled(DangerIcon)`
  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    width: 32px;
  }
`;

export const ErrorTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.headlines.small.default};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeight.small};;
  margin: 23px 0 32px;
  color: ${({ theme }) => theme.colors.textSecondaryColor};;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    margin: 17px 0 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    font-size: ${({ theme }) => theme.fontSizes.headlines.medium.mobile};
  }
`;

export const ErrorParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraph.large.default};
  line-height: ${({ theme }) => theme.lineHeight.large};;
  margin-bottom: 32px;
  color: ${({ theme }) => theme.colors.textSecondaryColor};;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    font-size: ${({ theme }) => theme.fontSizes.paragraph.medium.tablet};
    line-height: ${({ theme }) => theme.lineHeight.medium};;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    font-size: ${({ theme }) => theme.fontSizes.paragraph.medium.mobile};
    line-height: ${({ theme }) => theme.lineHeight.small};;
    margin-bottom: 24px;
  }
`;