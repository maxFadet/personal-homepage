import styled from "styled-components";

export const Tile = styled.article`
  background: ${({ theme }) => theme.color.white};
  padding: 0;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 40px;
`;

export const Image = styled.img`
  width: 384px;
  height: 384px;
  border-radius: 50%;
  
`;

export const Content = styled.div`

`;