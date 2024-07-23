import styled from "styled-components";
import { ReactComponent as Switch } from '../../../images/Switch.svg';

export const Wrapper = styled.div`
  max-width: 159px;
  display: flex;
  flex-direction: row;
  gap: 12px;
  position: absolute;
  right: 0;
  top: 0;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.span`
  line-height: 15.6px;
  font-weight: 700;
  font-size: 12px;
  color: ${({ theme }) => theme.color.slateGray};
`;

export const Button = styled.button`
display: flex;
align-items: center;
padding: 3px;
  width: 48px;
  cursor: pointer;
  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.color.slateGray};
  background-color: ${({ theme }) => theme.color.mercury};
`;

export const Icon = styled(Switch)`
  color: ${({ theme }) => theme.color.white};
`;

export const IconWrapper = styled.div`
  background: ${({ theme }) => theme.color.slateGray};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease 0s
`;