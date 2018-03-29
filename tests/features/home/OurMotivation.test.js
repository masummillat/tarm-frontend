import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { OurMotivation } from 'src/features/home/OurMotivation';

describe('home/OurMotivation', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <OurMotivation {...props} />
    );

    expect(
      renderedComponent.find('.home-our-motivation').getElement()
    ).to.exist;
  });
});
