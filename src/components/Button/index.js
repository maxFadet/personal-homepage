import styled from "styled-components";

export const BaseButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  padding: 12px 16px;
  border-radius: 4px;
  background: ${({ theme }) => theme.color.scienceBlue};
  color: ${({ theme }) => theme.color.white};
  border: 1px solid rgba(209, 213, 218, 0.3);
  outline: transparent solid 3px;
  text-decoration: none;
  transition: outline 0.3s ease 0s;
  white-space: nowrap;

  &:hover {
    outline: 3px solid rgba(140, 194, 255);
  }

  &:active {
    box-shadow: 0px 2px 0px 0px rgba(20, 70, 32, 0.2) inset;
    outline: none;
  }
`;

export const ButtonWithIcon = styled(BaseButton)`
  svg {
    margin-right: 16px;
    max-width: fit-content;
  }
`;