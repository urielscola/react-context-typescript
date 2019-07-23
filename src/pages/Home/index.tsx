import React from 'react';
import { Link } from '@reach/router';
import { useCounterContext, Types } from '../../contexts/ducks/counter';
import Head from '../../components/Head';

const Home: React.FC = () => {
  const { state, dispatch } = useCounterContext();

  return (
    <div>
      <Head title="Home" />
      Home!
      <div>{state.count}</div>
      <button onClick={() => dispatch({ type: Types.INCREMENT })}>
        Increment
      </button>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Home;
