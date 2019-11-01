import React from 'react';
import { shallow } from 'enzyme';
import Gifs from './Gifs';

jest.mock('../services/hey-arnold-api', () => ({
  getGifs() {
    return Promise.resolve([
      {
        '_id': '5da23754845fd2cb76d59ef2',
        'image': 'https://media.tenor.com/images/e7623921965651fa6fba7e0c37892044/tenor.gif'
      }
    ]);
  }
}));


describe('Gifs component', () => {

  it('renders', () => {
    const wrapper = shallow(
      <Gifs count={5} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
