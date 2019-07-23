import React from 'react';
import * as Styles from './styles';
import { useCounterContext } from '../../contexts/ducks/counter';

const Header = () => {
  const { state } = useCounterContext();
  return <Styles.Header>Header {state.count}</Styles.Header>;
};

export default Header;
