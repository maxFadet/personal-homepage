import styled from "styled-components";
import { ReactComponent as Message } from '../../images/Message.svg';

export const Article = styled.article`
  padding: 0;
  display: grid;
  position: relative;
  gap: 66px;
  align-items: center;
  grid-template-columns: 1fr auto;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const Image = styled.img`
  width: 384px;
  height: 384px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;

  @media (max-width: 767px) {
    width: 256px;
    height: 256px;
  }

  @media (max-width: 480px) {
    width: 128px;
    height: 128px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Caption = styled.div`
  line-height: 15.6px;
  text-align: left;
  font-weight: 700;
  font-size: 12px;
  color: ${({ theme }) => theme.color.slateGray};
`;

export const Name = styled.h1`
  color: ${({ theme }) => theme.color.mineShaft};
  font-size: 38px;
  font-weight: 900;
  line-height: 45.99px;

  @media (max-width: 996px) {
    font-size: 22px;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.color.slateGray};
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  text-align: left;
`;

export const Button = styled.button`
display: flex;
justify-content: space-between;
  width: 154px;
  height: 49px;
  padding: 12px 16px;
  border-radius: 4px;
  background: ${({ theme }) => theme.color.scienceBlue};
  color: ${({ theme }) => theme.color.white};
  border: 1px solid rgba(209, 213, 218, 0.3);

  &:hover {
    outline: 3px solid rgba(140, 194, 255);
  }

  &:active {
    box-shadow: 0px 2px 0px 0px rgba(20, 70, 32, 0.2) inset;
  }
`;

export const ButtonIcon = styled(Message)`
  width: 24px;
  height: 24px;
`;

export const ButtonText = styled.div`
font-size: 20.06px;
font-weight: 600;
line-height: 24.28px;
text-align: center;
`;