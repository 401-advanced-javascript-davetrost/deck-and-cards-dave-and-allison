import React from 'react';
import { shallow } from 'enzyme';
import Deck from './Deck';

describe('Deck component', () => {
  it('renders', () => {
    const wrapper = shallow(
      <Deck title="Test Title">
        <p>card 1</p>
        <p>card 2</p>
      </Deck>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders without a title', () => {
    const wrapper = shallow(
      <Deck>
        <p>card 1</p>
        <p>card 2</p>
      </Deck>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
