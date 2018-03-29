import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Gallery } from 'src/features/admin/Gallery';

describe('admin/Gallery', () => {
  it('renders node with correct class name', () => {
    const props = {
      admin: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Gallery {...props} />
    );

    expect(
      renderedComponent.find('.admin-gallery').getElement()
    ).to.exist;
  });
});
