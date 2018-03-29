import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { ProductList } from 'src/features/admin/ProductList';

describe('admin/ProductList', () => {
  it('renders node with correct class name', () => {
    const props = {
      admin: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <ProductList {...props} />
    );

    expect(
      renderedComponent.find('.admin-product-list').getElement()
    ).to.exist;
  });
});
