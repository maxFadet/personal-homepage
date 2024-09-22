import styled from "styled-components";
import { ReactComponent as Switcher } from "./Switcher.svg";

export const SwitcherWrapper = styled.div`
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

export const SwitcherCaption = styled.p`
  line-height: ${({ theme }) => theme.lineHeight.medium};;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size:  ${({ theme }) => theme.fontSizes.paragraph.small.default};
  text-transform: uppercase;
  letter-spacing: 0;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    display: none;
  }
`;

export const SwitcherButton = styled.button`
  display: flex;
  align-items: center;
  padding: 3px;
  width: 48px;
  height: 24px;
  cursor: ${({ theme }) => theme.cursor.pointer};
  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.backgroundSwitcher};
  position: relative;
  transition: background 0.3s, border 0.3s;
  outline-offset: 8px;
`;

export const SwitcherIcon = styled(Switcher)`
`;

export const SwitcherIconWrapper = styled.div`
  background: ${({ theme }) => theme.colors.text};
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
  transition: left 0.3s ease, 0.3s, background 0.3s;
  `;