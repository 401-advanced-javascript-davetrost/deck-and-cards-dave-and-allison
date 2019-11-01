import React from 'react';
import { shallow } from 'enzyme';
import Characters from './Characters';

jest.mock('../services/hey-arnold-api', () => ({
  getCharacters() {
    return Promise.resolve([
      {
        '_id': '5da237699734fdcb7bef8f51',
        'name': 'Arnold Shortman',
        'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/f/f5/Arnold.png/revision/latest?cb=20181027162333'
      }
    ]);
  }
}));


describe('Characters component', () => {
  
  it('renders', () => {
    const wrapper = shallow(
      <Characters count={5} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
