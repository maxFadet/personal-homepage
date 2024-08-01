import styled from "styled-components";

export const BaseButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  gap: 16px;
  padding: 12px 16px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.buttonText};
  border: 1px solid rgba(209, 213, 218, 0.3);
  outline: transparent solid 3px;
  text-decoration: none;
  transition: outline 0.3s ease 0s;
  white-space: nowrap;

  &:hover {
    outline: 3px solid ${({ theme }) => theme.colors.buttonShadow};
  }

  &:active {
    box-shadow: 0 2px ${({ theme }) => theme.colors.buttonActive} inset;
    outline: none;
  }
  
  @media (max-width: 480px) {
    font-size: 18px;
    gap: 12px;
  }
`;