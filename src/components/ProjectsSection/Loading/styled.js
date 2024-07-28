import styled from "styled-components";
import { ReactComponent as Loader } from '../../../images/Loader.svg';

export const Wrapper = styled.div`
  max-width: 100%;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
`;

export const LoadingIcon = styled(Loader)`
  border: 11px solid rgba(3, 102, 214, 1)
`;