import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { News } from 'src/features/home/News';

describe('home/News', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <News {...props} />
    );

    expect(
      renderedComponent.find('.home-news').getElement()
    ).to.exist;
  });
});
