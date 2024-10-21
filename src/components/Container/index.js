import styled from "styled-components";
import { ButtonLink } from "../../components/Button";

export const Container = styled.div`
  max-width: 1216px;
  margin: 119px auto 109px;
  width: 90%;
  letter-spacing: 0.05em;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    margin: 75px auto 71px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    margin: 31px auto 34px;
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
