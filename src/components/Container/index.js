import styled from "styled-components";

export const Container = styled.div`
  max-width: 1216px;
  margin: 119px auto 109px;
  width: 90%;
  letter-spacing: 0.05em;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    margin: 75px auto 71px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    margin: 31px auto 34px;
  }
`;