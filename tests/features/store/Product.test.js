import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Product } from 'src/features/store/Product';

describe('store/Product', () => {
  it('renders node with correct class name', () => {
    const props = {
      store: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Product {...props} />
    );

    expect(
      renderedComponent.find('.store-product').getElement()
    ).to.exist;
  });
});
