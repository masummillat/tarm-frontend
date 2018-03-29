import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Map } from 'src/features/home';

describe('home/Map', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <Map />
    );

    expect(
      renderedComponent.find('.home-map').getElement()
    ).to.exist;
  });
});
