import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card component', () => {
  it('renders with content', () => {
    const wrapper = shallow(
      <Card 
        title="Test Title"
        image="test image"
        content="this is a test" />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('renders without content', () => {
    const wrapper = shallow(
      <Card 
        title="Test Title"
        image="test image" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
