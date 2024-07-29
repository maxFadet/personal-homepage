import styled from "styled-components";

export const Container = styled.article`
  padding: 0;
  display: grid;
  grid-template-columns: auto;
  grid-gap: 72px;
  align-items: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  padding-top: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 480px) {
    gap: 16px;
  }
`;

export const Tile = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 
  rgba(9, 10, 51, 0.03) 0px 16px 58px, 
  rgba(9, 10, 51, 0.02) 0px -2px 50px;
  padding: 56px;
  border-radius: 4px;
  border: 6px solid ${({ theme }) => theme.color.iron};
  transition: border 0.3s ease 0s;;
  display: flex;
  flex-direction: column;
  gap: 24px;
  
  &:hover {
    border: 6px solid rgba(3, 102, 214, 0.2);
  }

  @media (max-width: 1200px) {
    padding: 40px;
  }

  @media (max-width: 480px) {
    padding: 24px;
    gap: 16px;
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.color.scienceBlue};
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  line-height: 29px;

  @media (max-width: 1200px) {
    line-height: 25px;
    font-size: 20px;
  }

  @media (max-width: 480px) {
    line-height: 20px;
    font-size: 16px;
  }
`;

const TextBase = styled.p`
  font-size: 18px;
  line-height: 25px;
  margin: 0;

  @media (max-width: 1200px) {
    line-height: 21px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    line-height: 17px;
    font-size: 14px;
  }
`;

export const Description = styled(TextBase)`
  color: ${({ theme }) => theme.color.slateGray};
`;

export const Link = styled(TextBase).attrs({ as: 'a' })`
  color: ${({ theme }) => theme.color.scienceBlue};
  text-decoration-color: rgb(3 102 214 / 20%);
  text-underline-offset: 5px;
  text-decoration-thickness: 1px;
  transition: color 0.3s ease 0s, 
  text-decoration-color 0.3s ease 0s, 
  font-weight 0.3s ease 0s;
  cursor: default;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    text-decoration-color: ${({ theme }) => theme.color.scienceBlue};
    font-weight: 450;
    }
`;

export const Links = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 8px;
  align-items: center;
`;
