import React, { createContext, useReducer, useContext, Dispatch } from 'react';

export enum Types {
  INCREMENT = '@count/INCREMENT',
  DECREMENT = '@count/DECREMENT'
}

export const Creators = {
  increment: (payload: any) => ({ type: Types.INCREMENT, payload }),
  decrement: (payload: any) => ({ type: Types.DECREMENT, payload })
};

interface iGlobalState {
  count: number;
}

interface iContext {
  state: iGlobalState;
  dispatch: Dispatch<any>;
}

export const intitialState: iGlobalState = {
  count: 0
};

export default function reducer(
  state = intitialState,
  { type, payload }: any
): iGlobalState {
  switch (type) {
    case Types.INCREMENT:
      return { ...state, count: state.count + 1 };
    case Types.DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      throw Error('Invalid action type');
  }
}

const CounterContext = createContext({} as iContext);
const useCounterContext = () => useContext(CounterContext);

const CounterProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, intitialState);
  const value: iContext = { state, dispatch };

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

export { CounterContext, CounterProvider, useCounterContext };
