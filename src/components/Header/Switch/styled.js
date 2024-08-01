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
  align-items: center;
  white-space: nowrap;
`;

export const Text = styled.span`
  line-height: 15.6px;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 3px;
  width: 48px;
  height: 24px;
  cursor: pointer;
  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.colors.textDominantColor};
  background-color: ${({ theme }) => theme.colors.backgroundSwitcher};
  position: relative;
`;

export const Icon = styled(Switch)`
`;

export const IconWrapper = styled.div`
  background: ${({ theme }) => theme.colors.textDominantColor};
  color: ${({ theme }) => theme.colors.background};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: ${({ darkMode }) => darkMode ? "calc(100% - 22px)" : "2px"};
  transform: translateY(-50%);
  transition: left 0.3s ease;
  `;