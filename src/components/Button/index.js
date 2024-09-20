import styled from "styled-components";

export const ButtonLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.paragraph.large.default};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  gap: 16px;
  padding: 12px 16px;
  border-radius: 4px;
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