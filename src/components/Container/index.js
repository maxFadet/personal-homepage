import styled from "styled-components";

export const Container = styled.div`
  max-width: 1216px;
  margin: 119px auto;
  width: 90%;
  letter-spacing: 0.05em;

  @media (max-width: 1200px) {
    margin: 50px auto;
  }

  @media (max-width: 564px) {
    margin: 31px auto;
  }
`;