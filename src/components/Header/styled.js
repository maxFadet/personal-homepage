import styled from "styled-components";
import { ReactComponent as Message } from '../../images/Message.svg';

export const Article = styled.article`
  padding: 0;
  display: flex;
  position: relative;
  gap: 66px;
  align-items: center;

  @media (max-width: 1120px) {
    grid-template-columns: 1fr;
  }
`;

export const Image = styled.img`
  width: 384px;
  height: 384px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
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
  letter-spacing: 0.05em;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.color.slateGray};
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.05em;
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
letter-spacing: 0.05em;
text-align: center;
`;