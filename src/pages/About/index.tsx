import React from 'react';
import { Link } from '@reach/router';
import { useCounterContext, Types } from '../../contexts/ducks/counter';
import Head from '../../components/Head';

const About: React.FC = () => {
  const { dispatch } = useCounterContext();

  return (
    <div>
      <Head title="About" />
      About!
      <button onClick={() => dispatch({ type: Types.DECREMENT })}>
        Decrement
      </button>
      <Link to="/">Home</Link>
    </div>
  );
};

export default About;
