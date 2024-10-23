import styled from "styled-components";

export const ButtonLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.paragraph.large.default};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  gap: 16px;
  padding: 12px 16px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.button.text};
  border: 1px solid rgba(209, 213, 218, 0.3);
  outline: transparent solid 3px;
  text-decoration: none;
  transition: outline 0.3s ease 0s;
  white-space: nowrap;

  &:hover {
    outline: 3px solid ${({ theme }) => theme.colors.button.outline};
  }

  &:active {
    box-shadow: 0 2px ${({ theme }) => theme.colors.button.active} inset;
    outline: none;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    font-size: ${({ theme }) => theme.fontSizes.paragraph.medium.mobile};
    gap: 12px;
  }
`;


export const ScrollToTopButton = styled(ButtonLink).attrs({ as: 'button' })`
  position: fixed;
  right: 20px;
  bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  padding: 10px 16px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.button.text};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.button.active};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    font-size: 20px;
    right: 10px;
    bottom: 10px;
  }
`;