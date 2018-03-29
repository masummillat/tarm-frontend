import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Map } from 'src/features/find-us/Map';

describe('find-us/Map', () => {
  it('renders node with correct class name', () => {
    const props = {
      findUs: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Map {...props} />
    );

    expect(
      renderedComponent.find('.find-us-map').getElement()
    ).to.exist;
  });
});
