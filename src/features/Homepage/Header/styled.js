import styled from "styled-components";
import { ReactComponent as Message } from './Message.svg';

export const Article = styled.article`
  padding: 0;
  display: grid;
  position: relative;
  gap: 72px;
  align-items: center;
  grid-template-columns: 1fr auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const Image = styled.img`
  width: 384px;
  height: 384px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: 256px;
    height: 256px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    width: 128px;
    height: 128px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  align-items: flex-start;
`;

export const Caption = styled.div`
  line-height: 15px;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0;
  color: ${({ theme }) => theme.colors.textDominantColor};
`;

export const Name = styled.h1`
  color: ${({ theme }) => theme.colors.textSecondaryColor};
  font-size: ${({ theme }) => theme.fontSizes.headlines.xlarge.default};
  font-weight: 900;
  line-height: 46px;
  margin: 12px 0 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    font-size: ${({ theme }) => theme.fontSizes.headlines.xlarge.tablet};
    line-height: 36px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    line-height: 27px;
    font-size: ${({ theme }) => theme.fontSizes.headlines.xlarge.mobile};
    margin: 8px 0 0 0;
  }
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  margin: 32px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    line-height: 26px;
    margin: 28px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    line-height: 24px;
    font-size: 17px;
    margin: 16px 0 24px 0;
  }
`;

export const ButtonIcon = styled(Message)`
 @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    width: 20px;
    height: 18px;
  }
`;