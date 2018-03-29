import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { DefaultPage } from 'src/features/gallery/DefaultPage';

describe('gallery/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      gallery: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.gallery-default-page').getElement()
    ).to.exist;
  });
});
