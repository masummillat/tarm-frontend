import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { SimpleSlider } from 'src/features/home/SimpleSlider';

describe('home/SimpleSlider', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <SimpleSlider {...props} />
    );

    expect(
      renderedComponent.find('.home-simple-slider').getElement()
    ).to.exist;
  });
});
