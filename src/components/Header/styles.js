import styled from 'styled-components/macro';
import { medias } from '../../assets/styles';

export const Header = styled.header`
  background: red;
  color: white;

  ${medias.between('sm', 'md')`
    background: yellow;
  `}

  ${medias.greaterThan('md')`
    background: blue;
  `}
`;
