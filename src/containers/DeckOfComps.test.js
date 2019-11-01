import React from 'react';
import { shallow } from 'enzyme';
import DeckOfComps from './DeckOfComps';
import Card from '../components/Card';

describe('DeckOfComps component', () => {
  const cardExample = {
    title:'Test Title',
    image:'test image',
    content:'this is a test'
  };
  it('renders', () => {
    const wrapper = shallow(
      <DeckOfComps title="Test Title" items={[cardExample, cardExample]} Component={Card}/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
