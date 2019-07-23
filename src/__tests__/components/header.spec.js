import React from 'react';
import { shallow } from 'enzyme';
import * as CounterContext from '../../contexts/ducks/counter';
import Header from '../../components/Header';

describe('Header component', () => {
  it('Should display Header text', () => {
    const mockContext = { state: { count: 1 } };
    jest
      .spyOn(CounterContext, 'useCounterContext')
      .mockImplementation(() => mockContext);

    const wrapper = shallow(<Header />);

    expect(wrapper.text()).toBe('Header 1');
  });
});
